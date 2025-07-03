import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Componente funcional Footer
const Footer = () => {
  return (
    // Pie de página con estilos personalizados
    <footer
      style={{
        backgroundColor: '#343a40', // Fondo oscuro
        color: 'white',              // Texto blanco
        padding: '2rem 0',           // Espaciado interno
        marginTop: '4rem'            // Margen superior
      }}
    >
      {/* Contenedor principal del footer */}
      <Container id='footer'>
        <Row>
          {/* Columna: Sobre Nosotros */}
          <Col md={4} className="mb-3">
            <h5>Sobre Nosotros</h5>
            <p>
              Somos tu agencia de viajes de confianza. Ofrecemos experiencias únicas en destinos increíbles.
            </p>
          </Col>

          {/* Columna: Contacto */}
          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <p>Email: info@turismoarg.com</p>
            <p>Tel: +54 11 5555-1234</p>
          </Col>

          {/* Columna: Redes Sociales */}
          <Col md={4} className="mb-3">
            <h5>Redes Sociales</h5>
            {/* Enlaces a redes sociales */}
            <a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none', display: 'block' }}>Facebook</a>
            <a href="https://instagram.com" style={{ color: 'white', textDecoration: 'none', display: 'block' }}>Instagram</a>
            <a href="https://twitter.com" style={{ color: 'white', textDecoration: 'none', display: 'block' }}>Twitter</a>
          </Col>
        </Row>

        {/* Línea divisoria */}
        <hr style={{ borderColor: 'gray' }} />

        <Row>
          {/* Texto de derechos reservados, centrado */}
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Turismo Argentina. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;