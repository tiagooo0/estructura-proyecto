const mongoose = require('mongoose');

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
    usuario: String, // Campo para almacenar el nombre de usuario
    contraseña: String, // Campo para almacenar la contraseña 
    edad: Number // Campo para almacenar la edad del usuario
});

// Exportar el modelo User basado en el esquema definido
module.exports = mongoose.model('User', userSchema, 'users');
