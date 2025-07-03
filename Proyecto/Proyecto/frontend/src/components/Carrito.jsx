import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { ListGroup, Button } from 'react-bootstrap';

function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((sum, item) => sum + item.precio_unitario * item.cantidad, 0);

  return (
    <div className="my-4" id='carrito'>
      <h4 style={{marginTop:"7rem"}}>Carrito de Compras</h4>
      <ListGroup>
        {carrito.map(item => (
          <ListGroup.Item key={item.id_producto}>
            {item.descripcion} x {item.cantidad} = ${item.precio_unitario * item.cantidad}
            <Button className="ms-2" size="sm" variant="danger"
              onClick={() => eliminarDelCarrito(item.id_producto)}>
              Quitar
            </Button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item><strong>Total: ${total}</strong></ListGroup.Item>
        <button className='mt-3' variant="sucess" onClick={() => alert('Compro Confirmada')}>Confirmar Compra</button>
      </ListGroup>
    </div>
  );
}

export default Carrito;