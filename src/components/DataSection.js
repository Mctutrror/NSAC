import React from 'react';
import './Data.css';

const Data = () => {
  return (
    <div className="data-container">
      <section className="data-overview">
        <h1>Datos de PACE</h1>
        <p>
          El Satélite PACE recopila una amplia variedad de datos sobre los océanos y la atmósfera, que están disponibles para el público 
          a través de la política de ciencia abierta de la NASA. Estos datos incluyen observaciones sobre el fitoplancton, aerosoles y 
          las nubes, todos los cuales son factores clave para el clima y la salud de los ecosistemas marinos.
        </p>
      </section>

      <section className="data-types">
        <h2>Tipos de Datos</h2>
        <ul>
          <li><strong>Fitoplancton:</strong> Datos que miden la biomasa y la productividad del fitoplancton, que son indicadores clave de la salud oceánica.</li>
          <li><strong>Aerosoles:</strong> Observaciones sobre partículas en suspensión en la atmósfera que afectan la calidad del aire y el clima.</li>
          <li><strong>Nubes:</strong> Información sobre la cobert ura y el tipo de nubes, lo que es importante para predecir el clima y los patrones meteorológicos.</li>
        </ul>
      </section>

      <section className="data-access">
        <h2>Acceso a los Datos</h2>
        <p>
          Todos los datos de PACE están disponibles gratuitamente para el público a través de los portales de datos de la NASA. Puedes acceder a 
          estos datos en bruto o a conjuntos de datos procesados que son fáciles de usar para investigaciones científicas y educativas.
        </p>
        <a href="https://pace.gsfc.nasa.gov/data/" target="_blank" rel="noopener noreferrer" className="data-link">Visita el portal de datos de PACE</a>
      </section>
    </div>
  );
};

export default Data;
