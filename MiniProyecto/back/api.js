let express = require("express");
let app = express();
let cors = require('cors')
let mongoose = require("mongoose");
const PORT = 5000;

const moviesSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    actors: [{type: mongoose.Schema.Types.ObjectId, ref: "professional"}],
    nacionality: String,
    director: [{type: mongoose.Schema.Types.ObjectId, ref: "professional"}],
    writer: [{type: mongoose.Schema.Types.ObjectId, ref: "professional"}],
    language: String,
    plataform: String,
    isMCU: Boolean,
    mainCharacterName: String,
    producer: String,
    distributor: String,
    genre: String
});

let MoviesModel = mongoose.model("movie", moviesSchema);

const professionalSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    weight: Number,
    height: Number,
    hairColor: String,
    eyeColor: String,
    race: String,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String,
    photo: String
});

let ProfessionalModel = mongoose.model("professional", professionalSchema);

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, "localhost", function(){
    console.log("Server is listen on port " + PORT + " en localhost EXPRESS");
});

///////////////

app.get("/professional",

        function(request, response)
        {
            if (request.query.id == null)
            {
                ProfessionalModel.find({})
                .then(function(pro)
                {
                    console.log(pro);
                    response.send(pro);
                })
                .catch(function(err)
                {
                    console.log(err);
                    process.exit(-1);
                })
            }
            else 
            {
                ProfessionalModel.findById(request.query.id)
                .then(function(pro)
                {
                    console.log(pro);
                    response.send(pro);
                })
                .catch(function(err)
                {
                    console.log(err);
                    process.exit(-1);
                })
            }
        })

app.post("/professional", 
        function(request, response)
        {
            console.log(request.body);

            let professional = new ProfessionalModel ({name: request.body.name,
                                                        age: request.body.age,
                                                        genre: request.body.genre,
                                                        weight: request.body.weight,
                                                        height: request.body.height,
                                                        hairColor: request.body.hairColor,
                                                        eyeColor: request.body.eyeColor,
                                                        race: request.body.race,
                                                        isRetired: request.body.isRetired,
                                                        nationality: request.body.nationality,
                                                        oscarsNumber: request.body.oscarsNumber,
                                                        profession: request.body.profession,
                                                        photo: request.body.photo})
            professional.save()
            .then(function(pro)
            {
                console.log("Profesional creado correctamente");
                response.send(pro);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.put("/professional", 
        function (request, response)
        {
            console.log(request.body);

            ProfessionalModel.updateOne({_id: request.body._id}, {
                                        name:         request.body.name,
                                        age:          request.body.age,
                                        genre:        request.body.genre,
                                        weight:       request.body.weight,
                                        height:       request.body.height,
                                        hairColor:    request.body.hairColor,
                                        eyeColor:     request.body.eyeColor,
                                        race:         request.body.race,
                                        isRetired:    request.body.isRetired,
                                        nationality:  request.body.nationality,
                                        oscarsNumber: request.body.oscarsNumber,
                                        profession:   request.body.profession,
                                        photo:        request.body.photo})
            .then(function(modificado)
            {
                console.log("Profesional modificado correctamente");
                response.send(modificado);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })

app.delete("/professional",
        function (request, response)
        {
            console.log(request.body);

            ProfessionalModel.deleteOne({_id: request.body._id})
            .then(function(pro)
            {
                console.log("Profesional eliminado correctamente");
                response.send(pro);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        })
        
        