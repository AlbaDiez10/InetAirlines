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



function App() {
  return (
    <Router>
      <NavBar />
      
      <div className="container-fluid">
        <Routes>
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
          <Route path="/registro" element={<Registro />} />       
          <Route path="/perfil" element={<PerfilCuenta />} />
          <Route path="/login" element={<Login />} />      
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;