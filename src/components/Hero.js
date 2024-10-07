import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="home-container">
      <section className="hero-video-section">
        <div className="video-overlay">
          <h1>Bienvenido a la Misión PACE</h1>
        </div>
        <video className="hero-video" autoPlay loop muted>
          <source src="videos/satelite.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </section>

      <section className="home-intro">
        <h2>Descubre la Misión PACE</h2>
        <p>
          El satélite PACE recopila datos fundamentales sobre los océanos y la atmósfera de la Tierra. A través de esta plataforma, 
          te proporcionamos acceso a materiales educativos que facilitan la comprensión de estos datos y promueven la alfabetización oceánica.
        </p>
        <p>
          {/* Contenido adicional aquí */}
        </p>
      </section>
    </div>
  );
};

export default Hero;
