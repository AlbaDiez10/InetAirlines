import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';

// Componente funcional Login
function Login() {
  // Estado para el email ingresado por el usuario
  const [email, setEmail] = useState('');
  // Estado para mostrar mensajes de error
  const [error, setError] = useState('');
  // Hook para navegación programática
  const navigate = useNavigate();

  // Maneja el envío del formulario de login
  const handleLogin = (e) => {
    e.preventDefault();
    // Obtiene el usuario registrado desde localStorage
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    // Verifica si el email ingresado coincide con el registrado
    if (usuarioGuardado && usuarioGuardado.email === email) {
      // Guarda el usuario activo en localStorage
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioGuardado));
      // Redirige al perfil
      navigate('/perfil'); 
    } else {
      setError('Email incorrecto o no registrado');
    }
  };

  return (
    // Centra el formulario vertical y horizontalmente
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '24rem', padding: '2rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Iniciar Sesión</Card.Title>
          {/* Muestra alerta si hay error */}
          {error && <Alert variant="danger">{error}</Alert>}
          {/* Formulario de login */}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresá tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">Ingresar</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;