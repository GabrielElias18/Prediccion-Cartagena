import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <MapPin size={24} />
        <span>Viaja a Cartagena</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#about" className="nav-link">Sobre Cartagena</a>
        <a href="#prediction" className="nav-link">Predicción</a>
      </div>
    </nav>
  );
};

export default Navbar;