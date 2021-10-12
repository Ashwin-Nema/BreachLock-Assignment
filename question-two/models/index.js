const mongoose = require('mongoose')
const ParkingLotSchema = new mongoose.Schema({
    slots:{
        type:Object,
        default:{}
    },
    emptyslots:{
        type:Array,
        default:[]
    },
    carstoslots:{
        type:Object,
        default:{}
    },
    slotsavailable:{
        type:Number,
        required:true
    }
}, {minimize:false})

const ParkingLotModel = mongoose.model('Parking Lot', ParkingLotSchema)
module.exports = ParkingLotModel