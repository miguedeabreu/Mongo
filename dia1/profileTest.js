let mongoose = require("mongoose");
let Profile = require("./profileSchema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


let profileDocument = new Profile ({
    name: "Dita",
    surname: "Coeforas",
    dateOfBirth: 2016,
    comments: "Soy una buldog inglés",
    rol: "Mascota"
});

profileDocument.save(checkRespuesta)

function checkRespuesta(err, res)
{
    if (err)
        console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
        mongoose.disconnect();
    }
}