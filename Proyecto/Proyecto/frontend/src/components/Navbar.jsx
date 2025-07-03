import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';

function NavBar() {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: '#00796b',
  };

  const linkStyle = {
    color: '#004d40',
    marginRight: '1rem',
    transition: 'color 0.3s ease',
  };



  return (
    <Navbar expand="lg" fixed="top" style={navbarStyle}>
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
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="me-auto">
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