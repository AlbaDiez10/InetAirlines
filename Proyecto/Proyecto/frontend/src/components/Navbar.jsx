import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';

// Componente funcional NavBar
function NavBar() {
  
  // Estado para saber si el usuario ha hecho scroll más de 500px
  const [scrolled, setScrolled] = useState(false);

  // Efecto para escuchar el evento de scroll y actualizar el estado
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Estilos dinámicos para la barra de navegación según el scroll
  const navbarStyle = {
    background: scrolled
      ? 'rgba(255, 255, 255, 0.95)'
      : 'linear-gradient(135deg, #ffffffcc, #e0f7faee)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: scrolled
      ? '0 2px 8px rgba(0, 0, 0, 0.1)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '1rem 2rem',
    transition: 'all 0.3s ease',
  };

  // Estilo para el nombre de la marca/logo
  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: '#00796b',
  };

  // Estilo para los enlaces de navegación
  const linkStyle = {
    color: '#004d40',
    marginRight: '1rem',
    transition: 'color 0.3s ease',
  };

  return (
    // Barra de navegación fija en la parte superior
    <Navbar expand="lg" fixed="top" style={navbarStyle}>
      {/* Logo y nombre de la empresa */}
      <Navbar.Brand as={Link} to="/" style={brandStyle}>   
        <img
          src="/Logo.jpeg"
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="Logo de la app"
        />{' '}
        NOMBRE-EMPRESA
      </Navbar.Brand>
      {/* Botón para mostrar/ocultar menú en pantallas pequeñas */}
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="me-auto">
          {/* Enlaces de navegación */}
          <Nav.Link as={Link} to="/" style={linkStyle}>Inicio</Nav.Link>
          <Nav.Link href="#carrito" style={linkStyle}>Carrito</Nav.Link>
          <Nav.Link as={Link} to="/registro" style={linkStyle}>Crear Cuenta</Nav.Link>
          <Nav.Link as={Link} to="/perfil" style={linkStyle}>Mi Perfil</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;