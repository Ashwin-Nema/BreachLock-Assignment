const ParkingLotModel = require('../models')
require('dotenv').config({ path: `.env.sample` })
const { slotsavailable } = process.env

async function CreateNewParkingLot() {
    const newslot = new ParkingLotModel({  slotsavailable: slotsavailable })
    const saveedslot = await newslot.save()
    const { _id } = saveedslot
    return _id
}

async function ParkCar(slot, carnumber, parkinglot) {
    const { _id } = parkinglot
    parkinglot.slots[slot] = carnumber
    parkinglot.slotsavailable -= 1
    parkinglot.carstoslots[carnumber] = slot
    await ParkingLotModel.updateOne({ _id }, { $set: parkinglot })
}

async function UnParkCar(slot, carnumber, parkinglot) {
    const { _id } = parkinglot
    delete parkinglot.slots[slot]
    delete parkinglot.carstoslots[carnumber]
    parkinglot.emptyslots.push(slot)
    parkinglot.slotsavailable += 1
    await ParkingLotModel.updateOne({ _id }, { $set: parkinglot })
}

module.exports = { ParkCar, UnParkCar, CreateNewParkingLot }