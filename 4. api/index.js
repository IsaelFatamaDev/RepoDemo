// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta para obtener la fecha actual
app.get('/api/fecha', (req, res) => {
     const fechaActual = new Date();
     res.json({ fecha: fechaActual });
});

// Ruta para obtener el día de la semana
app.get('/api/dia-semana', (req, res) => {
     const fechaActual = new Date();
     const diaSemana = fechaActual.toLocaleDateString('es-ES', { weekday: 'long' });
     res.json({ diaSemana: diaSemana });
});

// Ruta para obtener el tiempo UNIX
app.get('/api/tiempo-unix', (req, res) => {
     const tiempoUnix = Math.floor(Date.now() / 1000);
     res.json({ tiempoUnix: tiempoUnix });
});

// Iniciar el servidor
app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${PORT}`);
});
