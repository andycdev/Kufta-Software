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

import logoBarberKing from "../../assets/portfolio/kingsbarber.png";
import BarberKing from "../../assets/portfolio/kings_barber.png";
import BarberKingDashboard from "../../assets/portfolio/kings_barberdashboard.png";
import EmailBarber from "../../assets/portfolio/email_barbersking.jpg";

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
  const BarbersKingRef = useRef(null);

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

          <motion.div
            className={style.glass_container}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() =>
              BarbersKingRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src={logoBarberKing} alt="Kings Barber Logo" />
            <p>Barbers King</p>
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
          <h1 style={{color: "white"}}>¡Descarga Kufta Percha!</h1>
          <p>
            Crea tus pintas, organizalas, planificas y disfruta de tú orden.
          </p>

          <img src={QrKuftaP} alt="QR-code" />

          <a
            href="https://play.google.com/store/apps/details?id=com.kufta.percha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={onPlayStore} alt="Disponible en Google Play" />
          </a>
        </div>
      </div>

      <div className={style.line} ref={BarbersKingRef}></div>

      <div className={style.kufta_software}>
        <h2>Barbers King</h2>
        <p>
          <strong>Barbers King</strong> es una plataforma integral de gestión de
          citas diseñada para modernizar la operación de barberías
          profesionales. Este proyecto resuelve la problemática de la gestión
          manual de turnos, optimizando el tiempo del barbero y mejorando la
          experiencia del cliente final.
        </p>
        <img
          src={BarberKing}
          alt="Kings Barber Home"
          className={style.main_image}
          style={{
            border: "2px solid gold",
            width: "100%",
            marginBottom: "20px",
          }}
        />

        {/* Contenedor para las dos imágenes en fila (Dashboard y Email) */}
        <div className={style.images_row}>
          <img
            src={BarberKingDashboard}
            alt="Kings Barber Dashboard"
            style={{ border: "2px solid gold" }}
          />
          <img
            src={EmailBarber}
            alt="Kings Barber Email"
            style={{ border: "2px solid gold" }}
          />
        </div>
        <div className={style.row_kufta_software_info}>
          <div className={style.info_block}>
            <h2 style={{ display: "flex", alignContent: "start" }}>
              Solución Tecnológica
            </h2>
            <p>
              Implementé un sistema de <strong>agendamiento inteligente</strong>{" "}
              que valida en tiempo real la disponibilidad de los barberos,
              considerando horarios laborales, horas de almuerzo y cruce de
              citas existentes.
            </p>
            <br />
            <p>
              Desarrollé un sistema de{" "}
              <strong>notificaciones automáticas</strong> integrado con la API
              de Brevo, garantizando que tanto el cliente como el barbero
              reciban confirmaciones inmediatas, superando las restricciones de
              red comunes en entornos cloud.
            </p>
          </div>
          <br />

          <div className={style.info_block}>
            <p>
              <h2 style={{ display: "flex", alignContent: "start" }}>
                Stack Técnico
              </h2>
              <ul>
                <li>
                  <strong>Frontend:</strong> Angular 17+ con arquitectura de{" "}
                  <strong>Signals</strong> para una reactividad eficiente y
                  estilos personalizados con SASS y fuentes modernas (Fredoka).
                </li>
                <li>
                  <strong>Backend:</strong> .NET Core API con{" "}
                  <strong>Entity Framework Core</strong> y PostgreSQL,
                  implementando seguridad basada en roles (Admin/Barbero).
                </li>
                <li>
                  <strong>Infraestructura:</strong> Despliegue automatizado en
                  Docker y Render, utilizando variables de entorno para una
                  gestión segura de secretos y APIs.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={style.click_to}>
          <h1>¡Visita Barbers King!</h1>
          <p style={{textAlign:"center"}}>
            Gestiona tus citas de barbería con un sistema de agendamiento
            inteligente y notificaciones en tiempo real.
          </p>

          {/* Botón con enlace */}
          <a
            href="https://barbers-king-front.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className={style.btn_visit}
          >
            Explorar Aplicación
          </a>

          {/* Información de acceso para el portafolio */}
          <div className={style.access_info}>
            <p style={{textAlign: "center"}}>
              <strong>Prueba el Dashboard (Admin):</strong>
            </p>
            <span>
              <strong>Usuario:</strong> admin.prueba@kingsbarber.com
            </span>
            <span>
              <strong>Contraseña:</strong> Admin123
            </span>
          </div>
        </div>
      </div>

      <div className={style.line}></div>

      <Contactme />
    </div>
  );
}
