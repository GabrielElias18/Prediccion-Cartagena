import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Viaja a Cartagena</h3>
          <p>
            Somos una agencia especializada en ofrecer experiencias únicas y personalizadas 
            en Cartagena de Indias y toda la región del Caribe colombiano.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#about">Sobre Cartagena</a></li>
            <li><a href="#attractions">Atracciones</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#prediction">Predicción</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <p><MapPin size={16} /> Calle del Candilejo #38-96, Centro Histórico, Cartagena</p>
            <p><Phone size={16} /> +57 (5) 660 9438</p>
            <p><Mail size={16} /> info@viajeacartagena.com</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Viaja a Cartagena. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;