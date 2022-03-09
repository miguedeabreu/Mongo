const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name:       {   type:String,
                    enum: ["Dita", "Fran", "Miguel"]
                },
    surname:    {   type:String,
                    min: 2,
                    max: 20
                },
    dateOfBirth:{   type:Number,
                    required: [true, 'Product dateOfBirth required']
                } ,
    comments: String,
    rol: String
});

profileSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.name.length > 3)
    {
        console.log("Tu nombre tiene mas de cuatro caracteres")
        next();
    }
    else
    {
        console.log("Solo nombres con mas de cuatro caracteres")
    }
});

module.exports = mongoose.model("Profile", profileSchema)