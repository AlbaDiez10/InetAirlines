import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import PerfilUsuario from './components/PerfilUsuario';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Registro from './components/Registro';        
import PerfilCuenta from './components/PerfilCuenta';
import Login from './components/Login'; 

// Componente principal de la aplicación
function App() {
  return (
    // Envolvemos toda la app en el Router para habilitar rutas
    <Router>
      {/* Barra de navegación superior */}
      <NavBar />
      
      {/* Contenedor principal de las vistas */}
      <div className="container-fluid">
        <Routes>
          {/* Ruta principal: muestra varios componentes en la página de inicio */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <PerfilUsuario />
                <Galeria />
                <Carrito />
                <ListaProductos />
              </>
            }
          />
          
          <Route/>
          {/* Ruta para el registro de usuario */}
          <Route path="/registro" element={<Registro />} />       
          {/* Ruta para el perfil del usuario */}
          <Route path="/perfil" element={<PerfilCuenta />} />
          {/* Ruta para el login */}
          <Route path="/login" element={<Login />} />      
        </Routes>
      </div>
      {/* Pie de página */}
      <Footer />
    </Router>
  );
}

export default App;