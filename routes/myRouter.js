const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();
import{methods} from "./controllers/authentication.controller.js"

//Defino rutas y acciones de respuesta
router.route('/').get(myController.inicio);
router.route('/login').get(myController.login);
router.route('/register').get(myController.register);


module.exports = router;
