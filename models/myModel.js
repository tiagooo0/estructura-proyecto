//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const postSchema = new mongoose.Schema({
    usuario: {
        type: String,
    },
    contraseña: {
        type: String,
    },
});

//Creación del modelo Post
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
