const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
    login:  { type: String,
            required: [true, 'Product login required']
            },
    password: String,
    name: String,
    surname: String,
    dateOfBirth: Number,
    comments: String,
    role: String,
    address: String,
    phone: Number,
    email: String,
    follow: String
})

newUserSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.surname.length > 3)
    {
        console.log("Tu apellido tiene mas de cuatro caracteres")
        next();
    }
    else
    {
        console.log("Solo apellido con mas de cuatro caracteres")
    }
});

module.exports = mongoose.model("newUser", newUserSchema)