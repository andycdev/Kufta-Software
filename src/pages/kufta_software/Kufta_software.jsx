// Kufta_software.jsx
import React from "react";
import {
  FiSearch,
  FiLayout,
  FiCode,
  FiCheckCircle,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
import styles from "./kufta_software.module.css";
import portatil from "../../assets/kufta_software/pc_code.png";
import Container_info from "../../components/container_info/Container_info";
import HowDoCard from "../../components/howdo_cards/HowDoCard.jsx";
import Contactme from "../../components/contactme/Contactme.jsx";

export default function Kufta_software() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.ready_for_dreams}>
        <div className={styles.group_title}>
          <h4>Marcando diferencia con código</h4>
          <h1>Desarrollador Fullstack</h1>
          <p>
            Desarrollo soluciones web y móviles a medida, trabajando de forma
            directa con empresas y emprendedores para lograr resultados
            concretos.
          </p>
        </div>
        <img src={portatil} alt="Comptuador portatil" />
      </div>
      <div className={styles.who_is_kufta}>
        <h2>¿Qué es Kufta Software?</h2>
        <p>
          Kufta Software es mi marca personal y espacio profesional, donde
          presento los proyectos, habilidades y soluciones que desarrollo en el
          mundo del software. Mi enfoque está en construir software bien
          diseñado, mantenible y pensado para crecer, participando en todas las
          etapas del desarrollo, desde el análisis hasta la puesta en
          producción. Desarrollo soluciones web, móviles y backend para
          productos digitales, sistemas internos e integraciones entre
          plataformas. Abierto a colaborar en proyectos freelance y
          oportunidades profesionales.
        </p>
      </div>
      .
      <Container_info />
      <div className={styles.how_do}>
        <h1 className={styles.how_do_title}>¿Cómo hacerlo?</h1>
        <div className={styles.containers_how_do}>
          {[
            {
              icon: FiSearch,
              title: "Análisis",
              description:
                "Analizo el problema, el contexto y los objetivos antes de proponer cualquier solución.",
            },
            {
              icon: FiLayout,
              title: "Diseño",
              description:
                "Diseño la arquitectura, los flujos y la experiencia antes de escribir código.",
            },
            {
              icon: FiCode,
              title: "Desarrollo",
              description:
                "Desarrollo software con tecnologías modernas, código limpio y buenas prácticas.",
            },
            {
              icon: FiCheckCircle,
              title: "Testing",
              description:
                "Verifico estabilidad, funcionamiento y calidad antes de pasar a producción.",
            },
            {
              icon: FiServer,
              title: "Despliegue",
              description:
                "Gestiono el despliegue y la puesta en producción de forma controlada.",
            },
            {
              icon: FiDatabase,
              title: "Escalabilidad",
              description:
                "Construyo sistemas pensados para crecer, mantenerse y evolucionar.",
            },
          ].map((item, i) => (
            <HowDoCard key={i} {...item} />
          ))}
        </div>
      </div>
      <Contactme />
    </div>
  );
}
