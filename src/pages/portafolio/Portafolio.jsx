import "./Portafolio.css";
import { useEffect, useRef } from "react";
import KuftaPercha1 from "../../assets/portfolio/kufta_percha1.png"
import KuftaPercha2 from "../../assets/portfolio/kufta_percha2.png"
import KuftaPercha3 from "../../assets/portfolio/kufta_percha3.png"
import ContacMe from "../../components/contactme.jsx";


// pages/Kufta_software.jsx
export default function Portafolio() {

  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // 🔁 Reset por cada entrada a la sección
    title.classList.remove("animate");

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          title.classList.add("animate");
          observer.unobserve(title); // una sola vez por entrada
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  const picsRef = useRef(null);

  useEffect(() => {
    const el = picsRef.current;
    if (!el) return;

    el.classList.remove("animate");

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add("animate");
          observer.unobserve(el); // solo una vez por entrada a Portafolio
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);


  return (
    <main className="portafolio">
      <section className="portafolio-start">
        <h1 ref={titleRef}>¡Este es mi portafolio!</h1>
      </section>

      <div className="proyect">
        <h2>Kufta Percha</h2>
        <p>
          Kufta Percha es una aplicación móvil desarrollada en Flutter que permite
          organizar tu ropa, crear pintas completas y planear qué ponerte para cada
          ocasión. Incluye una galería interna de prendas con categorías, favoritos y
          búsqueda, donde cada prenda puede guardarse con nombre, descripción, color,
          etiquetas, estrellas y veces usada.
        </p>
        <br />
        <p>
          La app permite crear y editar pintas, asignarlas a fechas en un calendario,
          recibir notificaciones y gestionar todo de forma local usando Hive, sin
          depender de servicios externos. Además, ofrece personalización del tema y
          del color principal de la aplicación, haciendo que la experiencia sea tan
          flexible como tu estilo.
        </p>
        <div className="row-with-pics" ref={picsRef}>
          <img src={KuftaPercha1} alt="" />
          <img src={KuftaPercha2} alt="" />
          <img src={KuftaPercha3} alt="" />
        </div>

        <div className="urltoclick">
          <h3>Puedes descargar la app y ver más información aquí...</h3>
          <a href="https://github.com/andycdev/kufta-percha/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer">Kufta Percha</a>
        </div>

      </div>
      <div className="line"></div>

      <ContacMe></ContacMe>

    </main>
  );

}