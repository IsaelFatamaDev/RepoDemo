//* IMPORTACIÓN DE MÓDULOS
const express = require('express');
const app = express();
const db = require('./config/db')

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//Renderizado de un archivo EJS (MOTOR DE PLANTILLAS)
app.get("/", (req, res) => {
     res.render('index');
});

// ENVIAR DATOS A LA BASE DE DATOS
app.post('/guardar', (req, res) => {
     const { nombres, apellidos, dni, fechaNacimiento } = req.body;
     console.log('Datos recibidos: ', req.body);

     const query = 'INSERT INTO datos (nombres, apellidos, dni, fechaNacimiento, fechaRegistro ) VALUES(?,?,?,?, NOW())';

     db.query(query, [nombres, apellidos, dni, fechaNacimiento], (err, result) => {
          if (err) {
               console.error('Error al guardar en la base de datos: ', err);
               res.send('Error al guardar en la base de datos');
          } else {
               console.log('Datos guardados correctamente');
               //res.send('Datos guardados correctamente');
               res.render('/');
          }
     });
});


// TRAER DATOS DE LA BASE DE DATOS
app.get('/mostrar', (req, res) => {
     const query = 'SELECT id, nombres, apellidos, dni, DATE_FORMAT(fechaNacimiento, "%d/%m/%Y") as fechaNacimiento, DATE_FORMAT(fechaRegistro, "%d/%m/%Y %H:%i:%s") as fechaRegistro FROM datos';
     db.query(query, (err, result) => {
          if (err) {
               console.error('Error al obtener los datos: ', err)
               res.send('Error al obtener los datos: ', err)
          } else {
               res.render('mostrar', { datos: result });
          }
     });
});





//Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`El servidor está funcionando en http://localhost:${PORT}`)
});