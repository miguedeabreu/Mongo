const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


const MovieSchema = new mongoose.Schema(
    {   
        title:String,
        year:Number
    });

let MovieModel = mongoose.model("MovieOne", MovieSchema);

const DirectorSchema = new mongoose.Schema(
    {
        name:String,
        genre:String,
        movie: {type: mongoose.Schema.Types.ObjectId, ref: "MovieOne"}
    })

let DirectorModel = mongoose.model("DirectorOne", DirectorSchema)

let movie = new MovieModel({title: "Alice in Wonderland", year: 2010})

// movie.save()
//     .then(function(mov)
//     {
//         console.log("Pelicula guardada correctamente")
//         console.log(mov);
//         let director = new DirectorModel({name: "Tim Burton", genre: "Aventura", movie: mov._id})
//         return director.save();
//     })
//     .then(function(dir)
//     {
//         console.log("Director guardado correctamente")
//         console.log(dir)
//     })
//     .catch(function(error)
//     {
//         console.log(error)
//     })


DirectorModel.findOne({name: "Tim Burton"})
    .populate('movie')
    .exec(function(err, director)
    {
        if (err)
        {
            console.log(err);
            process.exit(-1);
        }
        console.log(`El autor ${director.name} tiene ${director.movie.title}`);
        console.log(director);
    })
    