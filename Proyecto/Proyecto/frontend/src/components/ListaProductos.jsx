import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

// Componente funcional ListaProductos
function ListaProductos() {
  // Estado para almacenar los productos obtenidos de la API
  const [productos, setProductos] = useState([]);
  // Obtiene la función para agregar productos al carrito desde el contexto
  const { agregarAlCarrito } = useContext(CarritoContext);
  // Hook para navegación programática 
  const navigate = useNavigate();

  // Efecto para obtener los productos al montar el componente
  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(res => setProductos(res.data)) // Guarda los productos en el estado
      .catch(err => console.error('Error al obtener productos:', err)); // Manejo de errores
  }, []);

  // Función para agregar un producto al carrito
  const agregarYRedirigir = (producto) => {
    agregarAlCarrito(producto);
    // Aquí podrías redirigir si lo deseas, usando navigate
  };

  return (
    // Contenedor principal con margen vertical y un id para anclaje
    <div className="my-4" id='ofertas'>
      <h4 className="text-center">Paquetes disponibles</h4>
      <Row className="g-3 justify-content-center">
        {/* Mapea los productos y muestra una tarjeta por cada uno */}
        {productos.map(prod => (
          <Col key={prod.id_producto} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '100%', height: '11rem' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{prod.descripcion}</Card.Title>
                <Card.Text>Precio: ${prod.precio_unitario}</Card.Text>
                {/* Botón para agregar el producto al carrito */}
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