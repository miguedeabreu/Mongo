let mongoose = require("mongoose");
let User = require("./userSchema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


let userDocument = new User ({
    login: "Inicio correcto",
    password: "Hola"
});

userDocument.save(checkRespuesta)

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