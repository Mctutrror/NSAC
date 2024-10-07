import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <section className="resources-intro">
        <h1>Recursos Educativos de PACE</h1>
        <p>
          Estos recursos están diseñados para ayudar a los estudiantes y educadores a utilizar los datos del satélite PACE en el aula. 
          A través de actividades interactivas, guías de estudio y herramientas visuales, puedes aprender sobre los océanos, los aerosoles 
          y las nubes.
        </p>
      </section>

      <section className="resources-list">
        <h2>Recursos Disponibles</h2>
        <ul>
          <li><a href="https://pace.gsfc.nasa.gov/education/" target="_blank" rel="noopener noreferrer">Actividades Interactivas</a></li>
          <li><a href="https://pace.gsfc.nasa.gov/resources/" target="_blank" rel="noopener noreferrer">Guías de Estudio</a></li>
          <li><a href="https://pace.gsfc.nasa.gov/gallery/" target="_blank" rel="noopener noreferrer">Galería de Imágenes y Videos</a></li>
        </ul>
      </section>

      <section className="resources-tools">
        <h2>Herramientas Visuales</h2>
        <p>
          Explora herramientas visuales para analizar los datos recopilados por PACE. Estas herramientas están diseñadas para facilitar la 
          interpretación de datos complejos en gráficos y visualizaciones interactivos.
        </p>
        <a href="https://earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="resources-link">Visita EarthData de la NASA</a>
      </section>
    </div>
  );
};

export default Resources;
