const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/usuarios'));
app.use('/api/productos', productosRoutes);

app.listen(3001, () => {
  console.log('Servidor backend corriendo en puerto 3001');
});




