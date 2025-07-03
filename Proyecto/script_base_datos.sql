CREATE DATABASE IF NOT EXISTS turismo;
USE turismo;

CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    contraseña VARCHAR(255),
    fecha_registro DATE
);

CREATE TABLE Producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    codigo_producto VARCHAR(20) UNIQUE,
    descripcion TEXT,
    precio_unitario DECIMAL(10,2)
);

CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha_pedido DATE,
    estado ENUM('pendiente', 'entregado', 'anulado'),
    total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE DetallePedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    subtotal DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
);

CREATE TABLE Factura (
    id_factura INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT UNIQUE,
    fecha_emision DATE,
    monto_total DECIMAL(10,2),
    estado ENUM('pendiente', 'pagada'),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido)
);

CREATE TABLE JefeVentas (
    id_jefe INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) UNIQUE,
    contraseña VARCHAR(255),
    email VARCHAR(100),
    nombre_completo VARCHAR(100)
);

CREATE TABLE CorreoDestino (
    id_mail INT AUTO_INCREMENT PRIMARY KEY,
    sector VARCHAR(50),
    email VARCHAR(100)
);
