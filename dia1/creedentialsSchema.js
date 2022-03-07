const mongoose = require("mongoose");

const creedentialsSquema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Creedentials", creedentialsSquema)