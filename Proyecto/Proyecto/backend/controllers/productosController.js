const db = require('../db/connection');

// Controlador para obtener todos los productos
const getProductos = (req, res) => {
  // Consulta a la base de datos para traer todos los productos
  db.query('SELECT * FROM Producto', (err, results) => {
    if (err) return res.status(500).send(err); // Si hay error, responde con error 500
    res.json(results); // Devuelve los resultados en formato JSON
  });
};



// Exporta el controlador para usarlo en las rutas
module.exports = { getProductos };