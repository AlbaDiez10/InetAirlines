import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

// Componente funcional Registro
function Registro() {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  // Hook para navegación programática
  const navigate = useNavigate();

  // Maneja el envío del formulario de registro
  const handleRegistro = async (e) => {
    e.preventDefault();

    // Validación simple de campos vacíos
    if (!nombre || !apellido || !email || !contraseña) {
      alert("Por favor complete todos los campos.");
      return;
    }

    try {
      // Envía los datos al backend para registrar el usuario
      const response = await axios.post('http://localhost:3001/api/registro', {
        nombre,
        apellido,
        email,
        contraseña,
      });

      // Si el registro fue exitoso
      if (response.status === 201) {
        alert('¡Usuario registrado exitosamente!');
        navigate('/'); // Redirige al inicio
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('No se pudo registrar el usuario.');
    }
  };

  return (
    // Centra el formulario vertical y horizontalmente
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '26rem', padding: '1.5rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Crear Cuenta</Card.Title>
          {/* Formulario de registro */}
          <Form onSubmit={handleRegistro}>
            <Form.Group controlId="nombre" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese su nombre"
                required
              />
            </Form.Group>

            <Form.Group controlId="apellido" className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Ingrese su apellido"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su email"
                required
              />
            </Form.Group>

            <Form.Group controlId="contraseña" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </Form.Group>

            {/* Botón para enviar el formulario */}
            <Button variant="success" type="submit" className="w-100">
              Crear Cuenta
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Registro;
