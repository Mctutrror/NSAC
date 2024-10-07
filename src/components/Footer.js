import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';  // Importar íconos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>PACE Satélite</h3>
          <p>Explora los datos del océano y la atmósfera de la Tierra.</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos en:</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
          </ul>
        </div>

        <div className="footer-credits">
          <p>&copy; 2024 PACE Satélite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
