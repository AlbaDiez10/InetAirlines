import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Componente funcional Galeria
function Galeria() {
  // Crea un array de 8 elementos (actualmente no se usa en el render)
  const cuadrados = Array(8).fill(0);

  return (
    // Contenedor principal centrado con margen superior
    <Container className="text-center" style={{ marginTop: "3rem" }}>
      {/* Fila con separación y centrado de columnas */}
      <Row className="g-4 justify-content-center">

        {/* Primera tarjeta */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <div className="card text-center mb-3" style={{ width: "100%", height: "26rem", margin: "0 auto" }}>
            <div className="card-body">
              {/* Imagen de seguridad */}
              <img src="seguridad-icon.png" className="card-img-top" alt="..." style={{ width: "11rem", height: "11rem" }} />
              <h5 className="card-title" style={{ paddingTop: "40px" }}>Viaja seguro</h5>
              <p className="card-text">Todos tus viajes tienen garantía y las medidas de seguridad correspondientes.</p>
            </div>
          </div>
        </Col>

        {/* Segunda tarjeta */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <div className="card text-center mb-3" style={{ width: "100%", height: "26rem", margin: "0 auto" }}>
            <div className="card-body">
              {/* Imagen de reloj */}
              <img src="reloj-icon.png" className="card-img-top" alt="..." style={{ width: "11rem", height: "11rem" }} />
              <h5 className="card-title" style={{ paddingTop: "40px" }}>Atención 24 horas</h5>
              <p className="card-text">Consultanos en cualquier momento a través de nuestros canales de comunicación.</p>
            </div>
          </div>
        </Col>

        {/* Tercera tarjeta */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <div className="card text-center mb-3" style={{ width: "100%", height: "26rem", margin: "0 auto" }}>
            <div className="card-body">
              {/* Imagen de viaje */}
              <img src="viaje-icon.png" className="card-img-top" alt="..." style={{ width: "11rem", height: "11rem" }} />
              <h5 className="card-title" style={{ paddingTop: "40px" }}>Viaja y disfruta</h5>
              <p className="card-text">Marcá tus destinos y disfrutá: nosotros nos encargamos del resto.</p>
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Galeria;