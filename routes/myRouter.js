// Importar el controlador y Express
const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

// Definir las rutas y acciones de respuesta
router.route('/').get(myController.inicio); // Ruta para la página de inicio
router.route('/login').get(myController.login); // Ruta para la página de inicio de sesión
router.route('/register').post(myController.register); // Ruta POST para el registro de usuarios
router.route('/registerPage').get(myController.registerPage); // Ruta para la página de registro

// Exportar el enrutador para su uso en otros archivos
module.exports = router;
