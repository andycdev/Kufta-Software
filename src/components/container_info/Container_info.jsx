import React, { useRef, useState } from "react";
import style from "./container_info.module.css";
import InfoCard from "./InfoCard";
import mobileImage from "../../assets/kufta_software/mobile_app.png";
import desktopImage from "../../assets/kufta_software/pc_app.png";
import backendImage from "../../assets/kufta_software/backend.png";

export default function Container_info() {
  const containerRef = useRef(null);
  const [state, setState] = useState("start");

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    if (scrollLeft === 0) {
      setState("start");
    } else if (scrollLeft + clientWidth >= scrollWidth - 20) {
      setState("end");
    } else {
      setState("scrolling");
    }
  };

  // Funcion para hacer el scroll
  const scrollByCard = (direction) => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    // si va a la derecha y ya casi está al final → fuerza el final
    if (
      direction > 0 &&
      scrollLeft + clientWidth >= scrollWidth - clientWidth * 0.8
    ) {
      el.scrollTo({
        left: scrollWidth,
        behavior: "smooth",
      });
      return;
    }

    // si va a la izquierda y ya casi está al inicio
    if (direction < 0 && scrollLeft <= clientWidth * 0.2) {
      el.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    // scroll normal
    const cardWidth = el.clientWidth * 0.6;

    el.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  const infoCards = [
    { id: 0, Component: MobileCard },
    { id: 1, Component: WebCard },
    { id: 2, Component: BackendCard },
  ];

  return (
    <div className={style.section}>
      <h2>Desarrollo</h2>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`${style.container} ${state === "scrolling" ? style.scrolling : state === "end" ? style.atEnd : ""}`}
      >
        {infoCards.map(({ id, Component }) => (
          <InfoCard key={id}>
            <Component />
          </InfoCard>
        ))}
      </div>

      {/* Botones para hacer scroll */}
      <div className={style.controls}>
        <button
          className={style.controlBtn}
          onClick={() => scrollByCard(-1)}
          disabled={state === "start"}
        >
          ◀
        </button>

        <button
          className={style.controlBtn}
          onClick={() => scrollByCard(1)}
          disabled={state === "end"}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

function MobileCard() {
  return (
    <>
      <div className={style.row}>
        <div className={style.column1}>
          <span className={style.title}>Móvil</span>
          <h3 className={style.description}>
            Desarrollo de aplicaciones móviles con enfoque profesional,
            aplicando metodologías ágiles y utilizando tecnologías como Dart y
            Kotlin, junto a frameworks modernos como Flutter y Jetpack Compose.
          </h3>
          <p className={style.footerCard}>
            Aplicaciones modernas, escalables y orientadas a producto.
          </p>
        </div>
        <div className={style.column2}>
          <div className={style.imageWrapper}>
            <img className={style.image} src={mobileImage} alt="Celular" />
          </div>
        </div>
      </div>
    </>
  );
}

function WebCard() {
  return (
    <>
      <div className={style.row}>
        <div className={style.column1}>
          <div className={style.imageWrapper}>
            <img className={style.image} src={desktopImage} alt="Desktop" />
          </div>
        </div>
        <div className={style.column2}>
          <span className={style.title}>Web</span>
          <h3 className={style.description}>
            Desarrollo de sitios y aplicaciones web con un enfoque profesional,
            aplicando metodologías ágiles y utilizando tecnologías modernas del
            ecosistema frontend para construir interfaces rápidas, accesibles y
            bien estructuradas.
          </h3>
          <p className={style.footerCard}>
            Páginas web modernas, escalables y enfocadas en experiencia de
            usuario.
          </p>
        </div>
      </div>
    </>
  );
}

function BackendCard() {
  return (
    <>
      <div className={style.row}>
        <div className={style.column1}>
          <span className={style.title}>Backend</span>
          <h3 className={style.description}>
            Desarrollo de backend y servicios del lado del servidor, enfocados
            en la creación e integración de APIs, manejo de arquitecturas REST y
            SOAP, y comunicación segura entre sistemas.
          </h3>
          <p className={style.footerCard}>
            Lógica de negocio sólida, integraciones confiables y sistemas
            escalables.
          </p>
        </div>
        <div className={style.column2}>
          <div className={style.imageWrapper}>
            <img className={style.image} src={backendImage} alt="Backend" />
          </div>
        </div>
      </div>
    </>
  );
}
