//* IMPORTACIÓN DE MÓDULOS
const express = require('express');
const app = express();
const db = require('./db/db')

//Envio de texto a la ruta principal del servidor
app.get("/", (req, res) => {
     res.send("Hola Mundo");
})

//Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`El servidor está funcionando en http://localhost:${PORT}`)
});