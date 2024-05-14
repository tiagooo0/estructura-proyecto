const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

// Carga de variables de entorno
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// Conexión a la base de datos
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Proyecto' // Nombre de la base de datos
})
.then((con) => {
    console.log(con.connections);
    console.log("Connected to database");
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});

const port = 3000;
// Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
