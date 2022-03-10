let express = require("express");
let app = express();
let cors = require('cors')
let mongoose = require("mongoose");
const PORT = 5000;

const photosSchema = new mongoose.Schema({
    name: String,
    url: String,
    title: String,
    description: String
});

let PhotosModel = mongoose.model("photo", photosSchema);

const newUserSchema = new mongoose.Schema({
    login: String,
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

let NewUserModel = mongoose.model("newUser", newUserSchema);

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, "localhost", function(){
    console.log("Server is listen on port " + PORT + " en localhost EXPRESS");
});


app.get("/photos",
        function(request, response)
        {
            if (request.query.name == null)
            {
                PhotosModel.find(request.query.name)
                .then(function(photo)
                {
                    console.log(photo);
                    response.send(photo);
                })
                .catch(function(err)
                {
                    console.log(err);
                    process.exit(-1);
                })
            }
            else 
            {
                PhotosModel.find({name: request.query.name})
                .then(function(photo)
                {
                    console.log(photo);
                    response.send(photo);
                })
                .catch(function(err)
                {
                    console.log(err);
                    process.exit(-1);
                })
            }
        })

app.post("/photos", 
        function(request, response)
        {
            console.log(request.body);

            let photo = new PhotosModel({name: request.body.name,
                                        url: request.body.url,
                                        title: request.body.title,
                                        description: request.body.description})
            photo.save()
            .then(function(photo)
            {
                console.log("Foto guardada correctamente");
                response.send(photo);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.delete("/photos",
        function (request, response)
        {
            console.log(request.body);

            PhotosModel.deleteOne({name: request.body.name, title: request.body.title})
            .then(function(photo)
            {
                console.log("Foto eliminada correctamente");
                response.send(photo);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.delete("/photos",
        function (request, response)
        {
            console.log(request.body);

            PhotosModel.deleteMany({name: request.body.name})
            .then(function(photo)
            {
                console.log("Fotos eliminadas correctamente");
                response.send(photo);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.put("/follow", 
        function (request, response)
        {
            console.log(request.body);

            NewUserModel.updateOne({name: request.body.name}, {follow: request.body.follow})
            .then(function(seguido)
            {
                console.log(`${request.body.name} a seguido a ${request.body.follow}`);
                response.send(seguido);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.put("/unfollow", 
        function (request, response)
        {
            console.log(request.body);

            NewUserModel.updateOne({name: request.body.name, follow: request.body.follow}, {follow: ""})
            .then(function(noSeguido)
            {
                if (noSeguido.modifiedCount === 1)
                    console.log(`${request.body.name} a dejado de seguir a ${request.body.follow}`);
                else
                {
                    console.log(`${request.body.name} no sigue a ${request.body.follow}`);
                }  
                response.send(noSeguido);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })