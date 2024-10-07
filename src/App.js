import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataSection from './components/DataSection';
import About from './components/About';
import Resources from './components/Resources';
import Footer from './components/Footer';
import LightSection1 from './components/LightSection1';
import LightSection2 from './components/LightSection2';
import LightSection3 from './components/LightSection3';
import LightSection4 from './components/LightSection4';
import TodoSum from './components/TodoSum';
import DataResources from './components/DataResources';
import AccessOptions from './components/AccessOptions';
import MaturityLevels from './components/MaturityLevels';
import AdditionalProducts from './components/AdditionalProducts';
import Fitopia from './components/Fitopia';
import Tutorials from './components/Tutorials';
import Chlorophyll from './components/Chlorophyll';
import BuildInstructions from './components/BuildInstructions';
import WhyPace from './components/WhyPace';
import LatestNews from './components/LatestNews';
import MapsBrochures from './components/MapsBrochures';
import MediaGallery from './components/MediaGallery';
import './App.css'; // Asegúrate de importar tu archivo CSS

function App() {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode(prev => !prev);
    };

    return (
        <Router>
            <div className={isNightMode ? 'dark-mode' : ''}>
                <Navbar toggleNightMode={toggleNightMode} isNightMode={isNightMode} />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/data" element={<DataSection />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/light-section-1" element={<LightSection1 />} />
                    <Route path="/resources/light-section-2" element={<LightSection2 />} />
                    <Route path="/resources/light-section-3" element={<LightSection3 />} />
                    <Route path="/resources/light-section-4" element={<LightSection4 />} />
                    <Route path="/resources/todo-suma" element={<TodoSum />} />
                    <Route path="/resources/data-resources" element={<DataResources />} />
                    <Route path="/resources/access-options" element={<AccessOptions />} />
                    <Route path="/resources/maturity-levels" element={<MaturityLevels />} />
                    <Route path="/resources/additional-products" element={<AdditionalProducts />} />
                    <Route path="/resources/fitopia" element={<Fitopia />} />
                    <Route path="/resources/tutorials" element={<Tutorials />} />
                    <Route path="/resources/chlorophyll" element={<Chlorophyll />} />
                    <Route path="/resources/build-instructions" element={<BuildInstructions />} />
                    <Route path="/resources/why-pace" element={<WhyPace />} />
                    <Route path="/resources/latest-news" element={<LatestNews />} />
                    <Route path="/resources/maps-brochures" element={<MapsBrochures />} />
                    <Route path="/resources/media-gallery" element={<MediaGallery />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
