const mongoose = require("mongoose");

const ListsSchema = new mongoose.Schema({
    id:{
        type: String,
        default: null
    },
    title:{
        type: String
    },
    poster:{
        type: String
    },
    likes:{
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model("List", ListsSchema);