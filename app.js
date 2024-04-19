const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session'); // Importa el módulo de express-session
const myRouter = require('./routes/myRouter');

const app = express();

// Defino el motor de plantillas a utilizar
app.set('view engine', 'ejs');
// Defino la localización de mis vistas
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la sesión
app.use(session({
    secret: 'secreto', // Cambia esto a una cadena secreta única
    resave: false,
    saveUninitialized: false
}));

// Agrego un enrutador compatible
app.use('/', myRouter);

module.exports = app;
