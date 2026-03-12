// Porftolio.jsx
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import style from "./Portfolio.module.css";
import FloatingArrow from "../../components/floatingarrow/FloatingArrow.jsx";
import logoKufta from "../../assets/logo/kufta_reverted.png";
import logoKuftaPercha from "../../assets/portfolio/kufta_percha.png";
import KuftaSoftware from "../../assets/portfolio/Kufta_software.png";
import Contactme from "../../components/contactme/Contactme.jsx";
import KuftaP1 from "../../assets/portfolio/kufta_p1.png";
import KuftaP2 from "../../assets/portfolio/kufta_p2.png";
import KuftaP3 from "../../assets/portfolio/kufta_p3.png";
import QrKuftaP from "../../assets/portfolio/qr-code.png";
import onPlayStore from "../../assets/portfolio/on_play_store.png";

const title = "Portafolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  },
};

export default function Portfolio() {
  const controls = useAnimation();
  const location = useLocation();
  const kuftaSoftwareRef = useRef(null);
  const kuftaPerchaRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/portfolio") {
      controls.set("hidden"); // reset inmediato
      controls.start("visible");
    }
  }, [location.pathname, controls]);
  return (
    <div className={style.portfolio_wrapper}>
      <div className={style.intro_porftolio}>
        <motion.h1
          className={style.title}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={style.letter}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        ></motion.p>
        <p>
          Aquí presento una selección de proyectos desarrollados de forma
          independiente y colaboraciones profesionales autorizadas, que reflejan
          mi enfoque, experiencia y forma de construir software.
        </p>

        <FloatingArrow />

        <div className={style.row_containers}>
          <motion.div
            className={style.glass_container}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() =>
              kuftaSoftwareRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src={logoKufta} alt="Kufta Logo" />
            <p>Kufta Software</p>
          </motion.div>

          <motion.div
            className={style.glass_container}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() =>
              kuftaPerchaRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src={logoKuftaPercha} alt="Kufta Percha Logo" />
            <p>Kufta Percha</p>
          </motion.div>
        </div>
      </div>
      <div className={style.line} ref={kuftaSoftwareRef}></div>

      <div className={style.kufta_software}>
        <h2>Kufta Software</h2>
        <p>
          <strong>Kufta Software</strong> es mi proyecto personal donde
          desarrollo aplicaciones y herramientas digitales. Aquí muestro mis
          experimentos, proyectos completos y soluciones que reflejan mi estilo
          y capacidad como desarrollador.
        </p>
        <img src={KuftaSoftware} alt="Kufta Software" />
        <div className={style.row_kufta_software_info}>
          <p>
            <strong>Kufta Software</strong> es un proyecto desarrollado en
            JavaScript, utilizando React como librería principal y Vite como
            framework de construcción, optimizado para rendimiento y
            escalabilidad.
          </p>

          <p>
            Este proyecto consiste en una página web que presenta la marca{" "}
            <strong>Kufta Software</strong>, mostrando sus principales proyectos
            y funcionando como portafolio personal donde también se incluye mi
            hoja de vida.
          </p>
        </div>
      </div>

      <div className={style.line} ref={kuftaPerchaRef}></div>

      <div className={style.kufta_percha}>
        <h2>Kufta Percha</h2>
        <p>
          <strong>Kufta Percha</strong> es una aplicación móvil desarrollada en
          Flutter pensada para organizar tu ropa de forma visual. Permite crear
          combinaciones completas de prendas como gorra, tronco, piernas y
          zapatos, facilitando la planificación de outfits para diferentes días
          u ocasiones.
        </p>
        <div className={style.row_img_kufta_percha}>
          <img src={KuftaP1} alt="Kufta Percha" />
          <img src={KuftaP2} alt="Kufta Percha" />
          <img src={KuftaP3} alt="Kufta Percha" />
        </div>
        <div className={style.row_kufta_percha_info}>
          <p>
            Cada prenda puede guardarse en una galería interna con imagen,
            nombre, descripción, color, etiquetas, calificación por estrellas y
            registro de uso. Además, las combinaciones pueden asignarse a fechas
            dentro de un calendario para llevar un control de lo que usas y
            organizar tu estilo con mayor facilidad.
          </p>

          <p>
            La aplicación funciona completamente de forma local utilizando
            almacenamiento en el dispositivo con Hive, sin depender de servicios
            externos. El objetivo es ofrecer una experiencia rápida, privada y
            personalizable, donde el usuario pueda gestionar su ropa y sus
            combinaciones de manera simple y visual.
          </p>
        </div>
        <div className={style.click_to}>
          <h1>¡Descarga Kufta Percha!</h1>
          <p>
            Crea tus pintas, organizalas, planificas y disfruta de tú orden.
          </p>

          <img src={QrKuftaP} alt="QR-code" />

          <a
            href="https://play.google.com/store/apps/details?id=com.kufta.percha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              // src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
              src={onPlayStore}
              alt="Disponible en Google Play"
            />
          </a>
        </div>
      </div>

      <div className={style.line}></div>

      <Contactme />
    </div>
  );
}
