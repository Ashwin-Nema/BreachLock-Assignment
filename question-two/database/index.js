const mongoose = require('mongoose')
require('dotenv').config({ path: `.env.sample` })
const { MONGODB_URL} = process.env
function Databaseconnection () {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, async (err) => {
        if (err) throw err
        console.log("connected")
    })
}

module.exports = Databaseconnection