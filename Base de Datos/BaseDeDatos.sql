-- CREAR BASE DE DATOS
CREATE DATABASE tienda;

-- USO DE LA BASE DE DATOS
USE tienda;

-- TABLA PRODUCTOS

CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10 , 2 ),
    stock INT
);

-- TABLA CLIENTES

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    email VARCHAR(40),
    telefono CHAR(9)
);

-- Mostrar la cantidad de tablas en una BD
SHOW TABLES;

-- Insertar datos de ejemplo

INSERT INTO productos 
(nombre, precio, stock) 
VALUES
('PRODUCTO 1', 10.50, 20),
('PRODUCTO 2', 05.20, 15),
('PRODUCTO 3', 20.40, 6),
('PRODUCTO 4', 35.50, 67),
('PRODUCTO 5', 100, 90);

-- INSERTAR DATOS CLIENTES

INSERT INTO clientes (nombre, apellido, email, telefono) VALUES
    ('Juan', 'García', 'juan@example.com', '123456789'),
    ('María', 'López', 'maria@example.com', '987654321'),
    ('Pedro', 'García', 'pedro@example.com', '555555555');
    
-- SELECCIONAR DATOS (SELECT)

SELECT * FROM productos;

SELECT * FROM clientes;

-- CLAUSULA WHERE

SELECT * FROM clientes WHERE apellido = "García";
SELECT * FROM clientes WHERE nombre = "María";

SELECT * FROM productos WHERE precio < 50.00;
SELECT * FROM productos WHERE stock = 6;

-- FUNCIONES

SELECT SUM(stock) AS total_productos FROM productos;

SELECT CONCAT(nombre, " ", apellido) AS DATOS FROM clientes;

-- ACTUALIZAR DATOS

UPDATE productos SET precio = 80.00 WHERE nombre = 'PRODUCTO 3';

UPDATE clientes SET nombre = 'Javier', apellido = 'Fatama' WHERE nombre = 'Juan' AND apellido = 'García';

UPDATE clientes SET email = 'isael.fatama@vallegrande.edu.pe', telefono = '922843355' WHERE id_cliente = 1;

-- ELIMINAR

DELETE FROM productos WHERE nombre = 'PRODUCTO 5';

DELETE FROM clientes WHERE id_cliente = 3;

SELECT * FROM productos;

