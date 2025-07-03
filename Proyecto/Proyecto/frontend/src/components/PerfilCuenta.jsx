import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Estilo para el botón de cerrar sesión
const linkStyle = {
  color: '#004d40',
  marginRight: '1rem',
  transition: 'color 0.3s ease',
};

// Componente funcional PerfilCuenta
function PerfilCuenta() {
  const navigate = useNavigate(); 

  // Estado para almacenar los datos del usuario activo
  const [usuario, setUsuario] = useState(null);

  // Efecto que se ejecuta al montar el componente
  useEffect(() => {
    // Obtiene el usuario activo desde localStorage
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    if (usuarioActivo) {
      setUsuario(JSON.parse(usuarioActivo)); // Si existe, lo guarda en el estado
    } else {
      navigate('/login'); // Si no hay usuario, redirige al login
    }
  }, [navigate]);

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo'); // Elimina el usuario activo del localStorage
    navigate('/login'); // Redirige al login
  };

  // Si no hay usuario, muestra un mensaje
  if (!usuario) {
    return (
      <div className="text-center mt-5">
        <h4>No hay usuario registrado</h4>
        <p>Por favor registre una cuenta primero.</p>
      </div>
    );
  }

  // Renderiza la tarjeta con los datos del usuario
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '26rem', padding: '1.5rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Perfil del Usuario</Card.Title>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Apellido:</strong> {usuario.apellido}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          {/* Botón para cerrar sesión */}
          <button onClick={cerrarSesion} style={{ ...linkStyle, color: 'red' }}>
            Cerrar Sesión
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PerfilCuenta;
