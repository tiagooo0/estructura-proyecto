// Importar Mongoose para interactuar con MongoDB
const mongoose = require("mongoose");

// Definir el esquema (Schema) para los datos a alojar en la base de datos
const postSchema = new mongoose.Schema({
    usuario: {
        type: String, // Tipo de dato para el campo usuario: String
    },
    contraseña: {
        type: String, // Tipo de dato para el campo contraseña: String
    },
    edad: {
        type: Number, // Tipo de dato para el campo edad: Number
    },
});

// Crear el modelo (Model) basado en el esquema definido
const Post = mongoose.model("Post", postSchema);

// Exportar el modelo para que pueda ser utilizado en otros archivos
module.exports = Post;
