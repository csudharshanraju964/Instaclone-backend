const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: { type: String},
    location: { type: String},
    likes: { type: String, default: `${Math.floor(Math.random()*100)}`},
    description: { type: String},
    PostImage: { type: String},
    date: {type: String, default: new Date().toLocaleDateString()}
})

module.exports = mongoose.model("Post", postSchema);