let mongoose = require("mongoose");
let Profile = require("./profileSchema2");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

let profileDocument = new Profile ({
    name: "Miguel",
    surname: "Rodrigues",
    dateOfBirth: 1993,
    comments: "Soy un rubito",
    rol: "Persona"
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