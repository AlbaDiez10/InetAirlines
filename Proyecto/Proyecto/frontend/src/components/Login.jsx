import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    if (usuarioGuardado && usuarioGuardado.email === email) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioGuardado));
      navigate('/perfil'); 
      setError('Email incorrecto o no registrado');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '24rem', padding: '2rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Iniciar Sesión</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
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