const bcrypt = require('bcrypt');
const Post = require('../models/myModel');

// Respuesta a una solicitud de tipo GET para la página de inicio
exports.inicio = (req, res) => {
    res.status(200).render('index'); 
};

// Renderizar la página de inicio de sesión
exports.login = (req, res) => {
    res.status(200).render('login');
};

// Renderizar la página de registro
exports.registerPage = (req, res) => {
    res.status(200).render('register');
};

// Manejar el registro de usuarios
exports.register = async (req, res) => {
    try {
        console.log(req.body); // Imprimir los datos del formulario en la consola del servidor

        const { usuario, contraseña } = req.body;
        
        // Verificar que los datos del formulario no sean undefined
        if (!usuario || !contraseña) {
            return res.status(400).send("Usuario y contraseña son requeridos");
        }

        // Generar el hash de la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10); // El segundo argumento es el número de rondas de hash

        // Crear un nuevo documento con la contraseña hasheada
        const nuevoUsuario = new Post({
            usuario: usuario,
            contraseña: hashedPassword
        });

        // Guardar el nuevo usuario en la base de datos
        await nuevoUsuario.save();

        // Redirigir o enviar una respuesta de éxito
        res.status(200).send("Usuario registrado exitosamente");
    } catch (error) {
        // Manejo de errores
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
};
