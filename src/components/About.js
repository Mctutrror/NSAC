import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="section about-container"> {/* Clase común para estilo */}
      <section className="about-mission">
        <h1>Acerca del Satélite PACE</h1>
        <p>
          El Satélite PACE (Plankton, Aerosol, Cloud, Ocean Ecosystem) de la NASA es una misión científica dedicada a mejorar nuestra 
          comprensión de los océanos, los aerosoles atmosféricos y las nubes. PACE mide la vida en el océano, desde el fitoplancton 
          microscópico hasta los ecosistemas marinos más complejos, y su interacción con los aerosoles en la atmósfera.
        </p>
      </section>

      <section className="about-impact">
        <h2>Importancia Científica</h2>
        <p>
          Los datos de PACE son esenciales para comprender mejor el cambio climático, la biodiversidad marina y la calidad del aire. 
          Proporciona observaciones críticas sobre la salud de los océanos y los ecosistemas marinos, y permite predecir mejor 
          eventos extremos relacionados con el clima.
        </p>
      </section>

      <section className="about-technology">
        <h2>Tecnología Innovadora</h2>
        <p>
          PACE utiliza un espectrorradiómetro de imágenes para capturar datos en múltiples longitudes de onda, lo que le permite obtener 
          una visión precisa de la composición del agua, los aerosoles atmosféricos y las nubes. Esta tecnología avanzada permite estudiar 
          los océanos de una manera que nunca antes fue posible.
        </p>
      </section>
    </div>
  );
};

export default About;
