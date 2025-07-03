// archivo: routes/usuarios.js

const express = require('express');
const router = express.Router();
const db = require('../config/db'); // conexión a MySQL

// Ruta para registrar un nuevo cliente
router.post('/registro', (req, res) => {
  // Extrae los datos enviados en el cuerpo de la petición
  const { nombre, apellido, email, contraseña } = req.body;

  // Valida que todos los campos estén presentes
  if (!nombre || !apellido || !email || !contraseña) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  // Consulta SQL para insertar un nuevo cliente en la base de datos
  const sql = 'INSERT INTO Cliente (nombre, apellido, email, contraseña, fecha_registro) VALUES (?, ?, ?, ?, CURDATE())';
  db.query(sql, [nombre, apellido, email, contraseña], (err, result) => {
    if (err) {
      // Si hay error al insertar, responde con error 500
      console.error('Error al insertar cliente:', err);
      return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
    // Si todo sale bien, responde con éxito
    res.status(201).json({ mensaje: 'Cliente registrado correctamente' });
  });
});

// Exporta el router para usarlo en la app principal
module.exports = router;
