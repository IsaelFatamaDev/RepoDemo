// IMPORTACIÓN DE MÓDULOS
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Renderizado de un archivo EJS (MOTOR DE PLANTILLAS)
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
               res.redirect('/mostrar');
          }
     });
});

// TRAER DATOS DE LA BASE DE DATOS
app.get('/mostrar', (req, res) => {
     const query = 'SELECT id, nombres, apellidos, dni, DATE_FORMAT(fechaNacimiento, "%d/%m/%Y") as fechaNacimiento, DATE_FORMAT(fechaRegistro, "%d/%m/%Y %H:%i:%s") as fechaRegistro FROM datos';
     db.query(query, (err, result) => {
          if (err) {
               console.error('Error al obtener los datos: ', err);
               res.send('Error al obtener los datos: ', err);
          } else {
               res.render('mostrar', { datos: result });
          }
     });
});

// Ruta para mostrar la página de actualización
app.get('/actualizar/:id', (req, res) => {
     const id = req.params.id;
     const query = 'SELECT id, nombres, apellidos, dni, DATE_FORMAT(fechaNacimiento, "%Y-%m-%d") as fechaNacimiento FROM datos WHERE id = ?';
     db.query(query, [id], (err, result) => {
          if (err) {
               console.error('Error al obtener los datos: ', err);
               res.send('Error al obtener los datos: ', err);
          } else {
               res.render('actualizar', { datos: result[0] });
          }
     });
});

// Ruta para actualizar un registro
app.post('/actualizar/:id', (req, res) => {
     const id = req.params.id;
     const { nombres, apellidos, dni, fechaNacimiento } = req.body;
     const query = 'UPDATE datos SET nombres=?, apellidos=?, dni=?, fechaNacimiento=? WHERE id=?';

     db.query(query, [nombres, apellidos, dni, fechaNacimiento, id], (err, result) => {
          if (err) {
               console.error('Error al actualizar en la base de datos: ', err);
               res.send('Error al actualizar en la base de datos');
          } else {
               console.log('Datos actualizados correctamente');
               res.redirect('/mostrar');
          }
     });
});

app.get('/borrar/:id', (req, res) => {
     const id = req.params.id;
     const query = 'SELECT id, nombres, apellidos, dni, DATE_FORMAT(fechaNacimiento, "%d/%m/%Y") as fechaNacimiento FROM datos WHERE id = ?';
     db.query(query, [id], (err, result) => {
          if (err) {
               console.error('Error al obtener los datos: ', err);
               res.send('Error al obtener los datos: ', err);
          } else {
               res.render('borrar', { datos: result[0] });
          }
     });
});

app.post('/borrar/:id', (req, res) => {
     const id = req.params.id;
     const query = 'DELETE FROM datos WHERE id=?';
     db.query(query, [id], (err, result) => {
          if (err) {
               console.error('Error al borrar en la base de datos: ', err);
               res.send('Error al borrar en la base de datos');
          } else {
               console.log('Datos borrados correctamente');
               res.redirect('/mostrar');
          }
     });
});

// Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
