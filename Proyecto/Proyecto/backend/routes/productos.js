const express = require('express');
const router = express.Router();
const { getProductos } = require('../controllers/productosController');


// esta ruta obtiene los prodcutos

router.get('/', getProductos);

module.exports = router;