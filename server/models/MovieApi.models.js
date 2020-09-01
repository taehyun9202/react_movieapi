const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    Title:{
        type: String
    },
    Year:{
        type: String,
        default: null
    },
    Rated:{
        type: String,
        default: null
    },
    Released:{
        type: String,
        default: null
    },
    Genre:{
        type: String,
        default: null
    },
    Runtime:{
        type: String,
        default: null
    },
    Director:{
        type: String,
        default: null
    },
    Writer:{
        type: String,
        default: null
    },
    Actors:{
        type: String,
        default: null
    },
    Plot:{
        type: String,
        default: null
    },
    imdbID:{
        type: String,
        default: null
    },
    Poster:{
        type: String,
        default: null
    },
    Metascore:{
        type: String,
        default: null
    },
    imdbRating:{
        type: String,
        default: null
    },
    Language:{
        type: String,
        default: null
    },
    Country:{
        type: String,
        default: null
    },
    totalSeasons:{
        type: String,
        default: null
    },
    Awards:{
        type: String,
        default: null
    },
    Production:{
        type: String,
        default: null
    },
    Ratings:{
        type: Object,
        default: null
    }
});
module.exports = mongoose.model("Movie", MovieSchema);