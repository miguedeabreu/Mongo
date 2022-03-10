let mongoose = require("mongoose");
let Photo = require("./photosSchema");
let User = require("./newUserSchema");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


function upPhoto (name, url, title, description){
    
    let photoDocument = new Photo ({
        name: name,
        url: url,
        title: title,
        description: description
    });
    
    let document = new Photo(photoDocument);
    
    document.save()
        .then(function()
        {
            console.log("Documento guardado correctamente desde promesa")
            mongoose.disconnect();
        })
        .catch(function()
        {
            console.log("Error al escribir el documento")
        })
}

// upPhoto("Karen", "123", "Mean Girls", "Pelicula")


function findPhoto (name){
    
    Photo.find({name: name})
    .then(function(items)
    {
        console.log(items)
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error")
    })
}

// findPhoto("Regina")

function follow(name, name1){
    User.updateOne({name:name}, {follow:name1})
    .then(function(items)
    {
        console.log(items)
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error")
    })
}

// follow("Miguel", "Ruben")

function unfollow (name, name1){
    
    User.updateMany({name:name, follow:name1}, {follow:""})
    .then(function(items)
    {
        console.log(items)
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error")
    })  
}

// unfollow("Miguel", "Ruben")

function deletePhoto(name, title){

    Photo.deleteOne({name:name, title:title})
    .then(function(items)
    {
        console.log("Correctamente borrado")
        console.log(items)
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error")
    })
}

// deletePhoto("Regina", "Numeros")

function deletePhotos(name){

    Photo.deleteMany({name:name})
    .then(function(items)
    {
        console.log("Correctamente borrado")
        console.log(items)
        mongoose.disconnect();
    })
    .catch(function()
    {
        console.log("Error")
    })
}

// deletePhotos("Karen")