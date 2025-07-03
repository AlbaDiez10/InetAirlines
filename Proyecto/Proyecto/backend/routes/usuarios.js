// archivo: routes/usuarios.js

const express = require('express');
const router = express.Router();
const db = require('../config/db'); // conexión a MySQL

router.post('/registro', (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;

  if (!nombre || !apellido || !email || !contraseña) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  const sql = 'INSERT INTO Cliente (nombre, apellido, email, contraseña, fecha_registro) VALUES (?, ?, ?, ?, CURDATE())';
  db.query(sql, [nombre, apellido, email, contraseña], (err, result) => {
    if (err) {
      console.error('Error al insertar cliente:', err);
      return res.status(500).json({ mensaje: 'Error en el servidor' });
    }
    res.status(201).json({ mensaje: 'Cliente registrado correctamente' });
  });
});

module.exports = router;
