// pages/sobremi/SobreMi.jsx
import profilePic from "../../assets/creator.png";
import "./SobreMi.css";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Contactme from "../../components/contactme.jsx";

export default function SobreMi() {
  const timelineData = [
  {
    year: "2021",
    description:
      "Finalizo mi bachillerato con excelente desempeño académico.",
  },
  {
    year: "2021",
    description:
      "Me gradúo con honores en Contabilización de Operaciones Financieras, destacando por mi dominio en contabilidad y gestión financiera.",
  },
  {
    year: "2022",
    description:
      "Inicio la Tecnología en Análisis y Desarrollo de Software, impulsado por mi pasión por la tecnología y la creación de soluciones innovadoras.",
  },
  {
    year: "2022-2024",
    description:
      "Desarrollo proyectos personales y colaborativos aplicando conocimientos en frontend, backend y bases de datos.",
  },
  {
    year: "2024",
    description:
      "Presento mi proyecto de grado: una aplicación móvil para Android basada en carreras de observación dentro del campus, integrando animación y elementos 3D.",
  },
  {
    year: "2024",
    description:
      "Diseño y desarrollo la página web de una compañía durante mis prácticas, además de brindar soporte técnico básico.",
  },
  {
    year: "2025-Presente",
    description:
      "Inicio mi carrera laboral en la empresa actual, desarrollando aplicaciones de cotización, integraciones con SAP, soluciones móviles y plataformas web.",
  },
];


  return (
    <main className="sobre-mi-page">
      <div className="sobre-mi">
        <section className="sobre-mi-content">
          {/* Texto */}
          <div className="sobre-mi-text">
            <h3>Bienvenido a Kufta Software</h3>
            <h1>Soy Felipe</h1>
            <p>
              Desarrollador de software apasionado por crear soluciones
              innovadoras y eficientes. Me especializo en tecnologías modernas
              como React, Node.js y soluciones escalables.
            </p>
          </div>

          {/* Foto */}
          <div className="sobre-mi-photo">
            <img src={profilePic} alt="Felipe - Desarrollador" />
          </div>

          {/* 3 Cards en columna */}
          <div className="sobre-mi-cards">
            <div className="card">
              <FaCode className="icon" />
              <h3>Código limpio</h3>
              <p>Estructura clara, legible y mantenible.</p>
            </div>
            <div className="card">
              <FaLaptopCode className="icon" />
              <h3>Full Stack</h3>
              <p>Frontend + Backend con las mejores prácticas.</p>
            </div>
            <div className="card">
              <FaRocket className="icon" />
              <h3>Performance</h3>
              <p>Aplicaciones rápidas y optimizadas.</p>
            </div>
          </div>
        </section>
      </div>
      <section className="mi-ruta-section">
        <div className="container">
          {/* Título grande a la derecha */}
          <h1 className="mi-ruta-title">Mi ruta</h1>

          {/* Línea de tiempo */}
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                {index !== timelineData.length - 1 && (
                  <div className="timeline-line"></div>
                )}

                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contactme></Contactme>
    </main>
  );
}
