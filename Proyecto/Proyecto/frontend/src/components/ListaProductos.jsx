import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al obtener productos:', err));
  }, []);

  const agregarYRedirigir = (producto) => {
    agregarAlCarrito(producto);
  };

  return (
    <div className="my-4" id='ofertas'>
      <h4 className="text-center">Paquetes disponibles</h4>
      <Row className="g-3 justify-content-center">
        {productos.map(prod => (
          <Col key={prod.id_producto} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%', height: '11rem' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{prod.descripcion}</Card.Title>
                <Card.Text>Precio: ${prod.precio_unitario}</Card.Text>
                <Button onClick={() => agregarYRedirigir(prod)} variant="primary" className="mt-auto">
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ListaProductos;