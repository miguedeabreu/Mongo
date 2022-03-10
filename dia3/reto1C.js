const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})


const MovieSchema = new mongoose.Schema(
    {   
        title:String,
        year:Number,
        directors: [{type: mongoose.Schema.Types.ObjectId, ref: "DirectorMuch"}]
    });

let MovieModel = mongoose.model("MovieMuch", MovieSchema);

const DirectorSchema = new mongoose.Schema(
    {
        name:String,
        genre:String,
        movies: [{type: mongoose.Schema.Types.ObjectId, ref: "MovieMuch"}]
    })

let DirectorModel = mongoose.model("DirectorMuch", DirectorSchema);

// let movie = new MovieModel ({title: "Alice in Wonderland", year: 2010, directors:["6228d1bc1fa629e747e7208e"]})
// movie.save()
//     .then(function(mov)
//     {
//         console.log("Pelicula guardada correctamente")
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     })

// movie = new MovieModel ({title: "Batman Returns", year: 1992, directors:["6228d1bc1fa629e747e7208e"]})
// movie.save()
//     .then(function(mov)
//     {
//         console.log("Pelicula guardada correctamente")
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     })

// movie = new MovieModel ({title: "The Devil Wears PRADA", year: 2006, directors:["6228d1bc1fa629e747e7208d"]})
// movie.save()
//     .then(function(mov)
//     {
//         console.log("Pelicula guardada correctamente")
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     })

////////////////////////////////////////////////

// let director = new DirectorModel({name: "David Frankel", genre: "drama", movies: ["6228cf28c7fda0e6d4de0df1"]})
// director.save()
//     .then(function(dir)
//     {
//         console.log("Director guardado correctamente")
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     })
// director = new DirectorModel({name: "Tim Burton", genre: "adventure", movies: ["6228cf28c7fda0e6d4de0def", "6228cf28c7fda0e6d4de0df0"]})
// director.save()
//     .then(function(dir)
//     {
//         console.log("Director guardado correctamente")
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     })

////////////////////////////////////////////////

MovieModel.findOne({title: "Batman Returns"})
    .populate('directors')
    .exec(function(err, movie)
    {
        if (err)
        {
            console.log(err);
            process.exit(-1);
        }
        console.log(`La pelicula ${movie.title} es del director ${movie.directors}`);
        console.log(movie);
    })