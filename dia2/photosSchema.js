const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
    name: String,
    url: String,
    title: String,
    description: String
});

photosSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.name != "")
    {
        console.log("Nombre aceptado")
        next();
    }
    else 
    {
        console.log("Nombre es un campo obligatorio")
    }
});

module.exports = mongoose.model("Photo", photosSchema)