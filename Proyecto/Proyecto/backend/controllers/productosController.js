const db = require('../db/connection');

const getProductos = (req, res) => {
  db.query('SELECT * FROM Producto', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const obtainPrdocut = (req,resp) => 
  db.query ('instert ')



module.exports = { getProductos };