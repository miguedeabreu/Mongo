let mongoose = require("mongoose");
let NewUser = require("./newUserSchema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


let newUserDocument = new NewUser ({
    login: "Inicio correcto",
    password: "Hola890",
    name: "Ruben",
    surname: "Rivas",
    dateOfBirth: 19995,
    comments: "Todo ok",
    role: "Profesor",
    address: "Madrid",
    phone: 890,
    email: "rr@gmail.com",
    follow: "Seguir"
});

newUserDocument.save(checkRespuesta)

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