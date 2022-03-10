const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


const MovieSchema = new mongoose.Schema(
    {   
        title:String,
        year:Number
    });

let MovieModel = mongoose.model("Movie", MovieSchema);

const DirectorSchema = new mongoose.Schema(
    {
        name:String,
        genre:String,
        movies: [{type: mongoose.Schema.Types.ObjectId, ref: "Movie"}]
    })

let DirectorModel = mongoose.model("Director", DirectorSchema)

let allMovies = [];
let movie = new MovieModel ({title: "Alice in Wonderland", year: 2010})

// movie.save()
//     .then(function(mov)
//     {
//         console.log("Pelicula 1 guardada correctamente")
//         allMovies.push(mov._id)
//         movie = new MovieModel ({title: "Sweeney Todd", year: 2007})
//         return movie.save();
//     })
//     .then(function(mov)
//     {
//         console.log("Pelicula 2 guardada correctamente")
//         allMovies.push(mov._id)
//         movie = new MovieModel ({title: "Addams", year: 1991})
//         return movie.save();
//     })
//     .then(function(mov)
//     {
//         console.log("Pelicula 3 guardada correctamente")
//         allMovies.push(mov._id)
//         movie = new MovieModel ({title: "Charlie and the Chocolate Factory", year: 2005})
//         return movie.save();
//     })
//     .then(function(mov)
//     {
//         console.log("Pelicula 4 guardada correctamente")
//         allMovies.push(mov._id)
//         let director = new DirectorModel({name: "Tim Burton", genre: "Aventura", movies: allMovies})
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
    .populate('movies')
    .exec(function(err, director)
    {
        if (err)
        {
            console.log(err);
            process.exit(-1);
        }
        console.log(`El autor ${director.name} 
                    tiene ${director.movies.length} peliculas`);
        console.log(`Datos de la primera pelicula 
                    ${director.movies[0].title} 
                    ${director.movies[0].year}`);
        console.log(director);
        mongoose.disconnect();
    })