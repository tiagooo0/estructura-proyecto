const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

// Defino rutas y acciones de respuesta
router.route('/').get(myController.inicio);
router.route('/login').get(myController.login);
router.route('/register').post(myController.register); // Agrego la ruta POST para el registro
router.route('/registerPage').get(myController.registerPage)
module.exports = router;
