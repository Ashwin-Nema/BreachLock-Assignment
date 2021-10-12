require('dotenv').config({ path: `.env.sample` })
const PORT = process.env.PORT || 3000
const databaseeconnection = require('./database')
const { ParkCar, UnParkCar, CreateNewParkingLot } = require('./Middlewares')
const ParkingLotModel = require('./models')

const express = require('express')
const app = express()
app.use(express.json())

//Function for creeating a new parking lot and extracting an id for the same

// CreateNewParkingLot().then((id) => {
//     console.log(id)

// }).catch(() => {
//     console.log("Somehting")
// })


app.post("/:id", async (req, res) => {
    const { carnumber } = req.body
    try {
        const parkinglot = await ParkingLotModel.findById(req.params.id)
        const { slotsavailable, emptyslots, carstoslots } = parkinglot
        if (slotsavailable === 0) {
            return res.json({ errormessage: "Parking lot is full" })
        }

        if (typeof carnumber !== "string" || carnumber.trim().length === 0) {
            return res.json({ errormessage: "Car number provided is not valid" })
        }

        if (carstoslots[carnumber] !== undefined) {
            return res.json({ errormessage: "Car with this car number is already parked in the parking lot" })
        }

        if (emptyslots.length > 0) {
            const emptyslot = parkinglot.emptyslots.shift()
            await ParkCar(emptyslot, carnumber, parkinglot)
            return res.json({ message: `Your car is successfully parked and your slot number is ${emptyslot}` })
        }
        const slotavailable = Object.keys(carstoslots).length + 1
        await ParkCar(slotavailable, carnumber, parkinglot)
        return res.json({ message: `Your car is successfully parked and your slot number is ${slotavailable}` })
    } catch(error) {
        res.status(500).send("Sorry the parking lot id provided does not exists in our database")
    }
})

app.get("/:id/:carnumberorslotnumber", async (req, res) => {
    const {id, carnumberorslotnumber} = req.params
    try {
        const parkinglot = await ParkingLotModel.findById(id)
        const {  carstoslots ,slots } = parkinglot
        
        const slot = carstoslots[carnumberorslotnumber]
        const carnumber = slots[carnumberorslotnumber]

        if (slot !== undefined) {
            return  res.json({Carnumber:carnumberorslotnumber, SlotNumber:slot})
        }

        if (carnumber !== undefined) {
            return  res.json({Carnumber:carnumber, SlotNumber:carnumberorslotnumber})
        }

        return res.json({ errormessage: "Sorry no information is available for the given details" })
    } catch(error) {
        res.status(500).send("Sorry the parking lot id provided does not exists in our database")
    }
})

app.delete("/:id/:slotnumber", async(req, res) => {
    const {id, slotnumber} = req.params
    try {
        const parkinglot = await ParkingLotModel.findById(id)
        const {  slots } = parkinglot

        const carnumber = slots[slotnumber]

        if (carnumber !== undefined) {
            await UnParkCar(slotnumber,carnumber, parkinglot)
            return  res.json({success:true})
        }

        return res.json({ errormessage: "Slot at this position is already empty" })
    } catch(error) {
        res.status(500).send("Sorry the parking lot id provided does not exists in our database")
    }
})

app.listen(PORT, () => {
    databaseeconnection()
})