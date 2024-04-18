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
    res.status(200).render('register', { errors: {} });
};

// Manejar el registro de usuarios
exports.register = async (req, res) => {
    try {
        console.log(req.body); // Imprimir los datos del formulario en la consola del servidor

        const { usuario, contraseña, edad } = req.body;
        
        // Verificar que los datos del formulario no sean undefined
        if (!usuario || !contraseña || !edad) {
            return res.status(400).send("Usuario, contraseña y edad son requeridos");
        }

        // Verificar que la edad esté en el rango permitido (0-99)
        if (isNaN(edad) || edad < 0 || edad > 99) {
            return res.status(400).send("La edad debe estar entre 0 y 99 años");
        }

        // Verificar que la contraseña tenga al menos 8 caracteres y contenga al menos una mayúscula
        if (contraseña.length < 8 || !/[A-Z]/.test(contraseña)) {
            return res.status(400).render('register', { errors: { password: "La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula" } });
        }

        // Generar el hash de la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10); // El segundo argumento es el número de rondas de hash

        // Crear un nuevo documento con la contraseña hasheada
        const nuevoUsuario = new Post({
            usuario: usuario,
            contraseña: hashedPassword,
            edad: edad
        });

        // Guardar el nuevo usuario en la base de datos
        await nuevoUsuario.save();

        // Redirigir al usuario a la página de inicio de sesión después de registrarse exitosamente
        res.redirect('/login');
    } catch (error) {
        // Manejo de errores
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
};
