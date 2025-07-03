import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext'; // Contexto que maneja el estado del carrito
import { ListGroup, Button } from 'react-bootstrap'; // Componentes de Bootstrap

function Carrito() {
  // Extrae el carrito y la función para eliminar productos desde el contexto
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  // Calcula el total sumando el precio por cantidad de cada producto
  const total = carrito.reduce((sum, item) => sum + item.precio_unitario * item.cantidad, 0);

  return (
    <div className="my-4" id='carrito'>
      <h4 style={{ marginTop: "7rem" }}>Carrito de Compras</h4>

      <ListGroup>
        {/* Muestra cada producto en el carrito */}
        {carrito.map(item => (
          <ListGroup.Item key={item.id_producto}>
            {item.descripcion} x {item.cantidad} = ${item.precio_unitario * item.cantidad}
            
            {/* Botón para quitar el producto */}
            <Button
              className="ms-2"
              size="sm"
              variant="danger"
              onClick={() => eliminarDelCarrito(item.id_producto)}
            >
              Quitar
            </Button>
          </ListGroup.Item>
        ))}

        {/* Muestra el total del carrito */}
        <ListGroup.Item>
          <strong>Total: ${total}</strong>
        </ListGroup.Item>

        {/* Botón para confirmar la compra */}
        <button
          className='mt-3'
          variant="sucess"  
          onClick={() => alert('Compra Confirmada')}
        >
          Confirmar Compra
        </button>
      </ListGroup>
    </div>
  );
}

export default Carrito;
