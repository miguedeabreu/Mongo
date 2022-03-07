let mongoose = require("mongoose");
let Creedentials = require("./creedentialsSchema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


let creedentialsDocument = new Creedentials ({
    address: "Madrid",
    phone: 655641819,
    email: "madrid@gmail.com"
});

creedentialsDocument.save(checkRespuesta)

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