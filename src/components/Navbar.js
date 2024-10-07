import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que el CSS esté aquí
import Logo from '../components/imagen.png'; // Cambia 'nombre-de-la-imagen.ext' por el nombre real

function Navbar({ toggleNightMode, isNightMode }) {
    return (
        <nav>
            <div className="navbar-container">
                <img src={Logo} id='logo' alt="Logo" />
                <h1>Misión PACE</h1>
                <ul className="navbar">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/data">Data</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li className="menu-item">
                        <Link to="/resources">Recursos</Link>
                        <ul className="submenu">
                            <li className="submenu-item">Arrojando Luz sobre PACE
                                <ul>
                                    <li><Link to="/resources/light-section-1">Sección I: Propiedades fundamentales de la luz</Link></li>
                                    <li><Link to="/resources/light-section-2">Sección II: ¿Qué determina el color que vemos?</Link></li>
                                    <li><Link to="/resources/light-section-3">Sección III: ¿Cómo interactúa la atmósfera con la luz?</Link></li>
                                    <li><Link to="/resources/light-section-4">Sección IV: ¿Cómo interactúa el océano con la luz?</Link></li>
                                    <li><Link to="/resources/todo-suma">PACE - ¡TODO SUMA!</Link></li>
                                </ul>
                            </li>
                            <li className="submenu-item">Acceso a los datos de PACE
                                <ul>
                                    <li><Link to="/resources/data-resources">Recursos de datos de PACE</Link></li>
                                    <li><Link to="/resources/access-options">Opciones para acceder a los datos de PACE</Link></li>
                                    <li><Link to="/resources/maturity-levels">Acceso por nivel de madurez</Link></li>
                                    <li><Link to="/resources/additional-products">Productos derivados adicionales</Link></li>
                                </ul>
                            </li>
                            <li className="submenu-item">Exploración del fitoplancton
                                <ul>
                                    <li><Link to="/resources/fitopia">Fitopia</Link></li>
                                    <li><Link to="/resources/tutorials">Exploración del fitoplancton</Link></li>
                                    <li><Link to="/resources/chlorophyll">Tutoriales y recursos</Link></li>
                                    <li><Link to="/resources/chlorophyll">NASA's long-term chlorophyll record is unparalleled</Link></li>
                                </ul>
                            </li>
                            <li className="submenu-item">¡Construye tu propio RITMO!
                                <ul>
                                    <li><Link to="/resources/build-instructions">Instrucciones y plantilla</Link></li>
                                </ul>
                            </li>
                            <li className="submenu-item">¿Por qué necesitamos PACE?
                                <ul>
                                    <li><Link to="/resources/why-pace">Ecología oceánica</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/resources/latest-news">Nuestras últimas noticias</Link></li>
                            <li><Link to="/resources/maps-brochures">Mapas de historias y folletos electrónicos de PCE</Link></li>
                            <li><Link to="/resources/media-gallery">Galería de medios</Link></li>
                        </ul>
                    </li>
                </ul>
                <button className="toggle-mode" onClick={toggleNightMode}>
                    {isNightMode ? '🌞 Modo Diurno' : '🌙 Modo Nocturno'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
