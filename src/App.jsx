// App.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/kufta_banner_reverted.png";
import KuftaSoftware from "./pages/kufta_software/Kufta_software";
import Servicios from "./pages/servicios/Servicios";
import Portafolio from "./pages/portafolio/Portafolio";
import SobreMi from "./pages/sobremi/SobreMi";
import "./App.css";

const pages = [
  { name: "Kufta Software", component: <KuftaSoftware /> },
  // { name: "Servicios", component: <Servicios /> },
  { name: "Portafolio", component: <Portafolio /> },
  { name: "Sobre mí", component: <SobreMi /> },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="app">
      {/* NAVBAR FIJO */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Kufta Software" />
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {pages.map((page, i) => (
            <li key={i}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToSlide(i);
                }}
                className={currentIndex === i ? "active" : ""}
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>


        <a href="https://wa.me/573012717380" className="cta-button">
          Hablemos
        </a>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* CONTENIDO HORIZONTAL */}
      <div className="slider-container" ref={containerRef}>
        <motion.div
          className="slider"
          style={{ x: -currentIndex * 100 + "vw" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {pages.map((page, i) => (
            <div key={i} className="slide">
              {page.component}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;