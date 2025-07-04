import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// Estilo para el botón de ofertas
const buttonStyle = {
  aligItem:"center", 
  fontSize: '1.5rem',
  padding: '10px 20px',
  backgroundColor: '#ff6f61',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

// Estilo para el hover del botón
const buttonHoverStyle = {
  backgroundColor: '#e05c4e',
};

// Componente funcional PerfilUsuario
function PerfilUsuario() {
  return (
    // Tarjeta principal con fondo semitransparente y centrado
    <Card className="container text-center p-3 my-3 w-100" style={{backgroundColor: 'rgba(204, 204, 204, 0.5)'}}>
        {/* Título principal */}
        <h1 style={{padding:"1rem"}}>¡Escapate a los mejores destinos turísticos!</h1>
        {/* Subtítulo */}
        <h3 style={{padding:"1rem"}}>Ofertas especiales para ti. ¡Reserva hoy y ahorra!</h3>
      <div>
        <Row className="container text-center">
          {/* Botón de ofertas con efecto hover */}
          <a
            href="#carrito"
            style={buttonStyle}
            onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={e => e.target.style.backgroundColor = '#ff6f61'}
          >
            Ofertas solo para vos!!!
          </a>
        </Row>
      </div>
    </Card>
  );
}

export default PerfilUsuario;