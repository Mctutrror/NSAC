import React from 'react';
import './Hero.css';
import Logo from '../components/PACE.png'; // Cambia 'nombre-de-la-imagen.ext' por el nombre real

const Hero = () => {
  return (
    <div className="home-container">
      <section className="hero-video-section">
        <div className="video-overlay">
          <h1>Bienvenido a la Misión PACE</h1>
        </div>
        <video className="hero-video" autoPlay loop muted>
          <source src= "https://pace.oceansciences.org/movies/pace_in_orbit.mp4" type="video/mp4" />
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
        <h2>1.- Introducción a PACE </h2>

¿Qué le darías a un océano que lo tiene todo? <br></br>Este año, con motivo del Mes Nacional del Océano, el satélite Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) de la NASA nos ofrece una visión única de nuestro planeta. Lanzado el 8 de febrero de 2024, PACE ya está mejorando nuestra comprensión de los mares y cielos. 

<h2>2.- Observación Diaria</h2> 

El satélite PACE observa la Tierra todos los días y envía datos que permiten a los científicos rastrear y monitorear cambios en la atmósfera y el océano. Esto incluye la formación de nubes, el movimiento de aerosoles y las variaciones en la vida microscópica del océano a lo largo del tiempo. 

<h2>3.- Instrumento Ocean Color</h2> (se refiere a la observación del color del océano, que es un indicador clave de la salud y composición de los ecosistemas marinos.) 

El instrumento Ocean Color de PACE observa la Tierra en más de 200 longitudes de onda, desde la luz ultravioleta hasta la infrarroja cercana. Esto permite a los científicos identificar comunidades específicas de fitoplancton desde el espacio, un avance significativo en la investigación oceánica. 

  

<h3>3.1: El satélite PACE de la NASA incluye un instrumento específico llamado Ocean Color Instrument (OCI) </h3>

  

 “Mide la luz en más de 200 longitudes de onda. Esto permite a los científicos identificar y clasificar diferentes tipos de fitoplancton y otros componentes del ecosistema oceánico desde el espacio.” 

<h3>3.2 Tipos de Fitoplancton: </h3>

•	Picoeucariotas (verde): Organismos pequeños que son esenciales en la red alimentaria. <br></br>

•	Proclorococos (azul claro): Los más pequeños conocidos, clave en la fotosíntesis oceánica. <br></br>

•	Sinecococos (rosa brillante): Pueden teñir el agua de rosa claro en concentraciones altas. <br></br>

<h2>4.- Polarímetros HARP2 y SPEXone 
</h2>
Los dos polarímetros de PACE proporcionan una visión única de la atmósfera de la Tierra.  <br></br>

•	HARP2: Mide la concentración de aerosoles y ayuda a entender la interacción entre nubes y aerosoles, mejorando así los modelos climáticos. 
<br></br>
•	SPEXone: Amplía la información sobre el tamaño de las partículas de aerosol, fundamental para la calidad del aire. 
<br></br><br></br>
<strong>Mapas Globales de Fitoplancton </strong>
<br></br>
En el próximo año, los científicos de PACE tienen como objetivo crear los primeros mapas globales de las comunidades de fitoplancton y entender cómo estos recursos acuáticos responden al cambio climático. 
<br></br><br></br>
<strong>Innovaciones en la Ciencia </strong>
<br></br>
La sonda PACE ha sido diseñada para estudiar el mar y el cielo desde el espacio. Su instrumento principal mide todos los colores del arco iris, lo que permite identificar tipos de fitoplancton a partir de su pigmento fotosintético, la clorofila-a. Esto es crucial para comprender el impacto de los fitoplancton en el clima y el ciclo del carbono.  </p>
        <div className="image" >
        <img src={Logo} alt='Logo'/>
        </div>
      </section>
    </div>
  );
};

export default Hero;
