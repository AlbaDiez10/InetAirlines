import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const linkStyle = {
  color: '#004d40',
  marginRight: '1rem',
  transition: 'color 0.3s ease',
};

function PerfilCuenta() {
  const navigate = useNavigate(); 

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    if (usuarioActivo) {
      setUsuario(JSON.parse(usuarioActivo));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo');
    navigate('/login');
  };

  if (!usuario) {
    return (
      <div className="text-center mt-5">
        <h4>No hay usuario registrado</h4>
        <p>Por favor registre una cuenta primero.</p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '26rem', padding: '1.5rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Perfil del Usuario</Card.Title>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Apellido:</strong> {usuario.apellido}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <button onClick={cerrarSesion} style={{ ...linkStyle, color: 'red' }}>
            Cerrar Sesión
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PerfilCuenta;
