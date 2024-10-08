import React from 'react';
import './GlobalStyles.css';

const ContentBlock = () => {
  return (
    <div className="content-container">
      <section className="content-section">
        <div className="section-block">
          <h1>Sección III: ¿Cómo interactúa la atmósfera con la luz?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div className="section-block">
          <h2>Impacto Global</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="section-block">
          <h2>Nuestra Tecnología</h2>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentBlock;
