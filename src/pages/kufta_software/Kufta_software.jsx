import "./Kuftwa_software.css";
import PcImg from "../../assets/pc_code.png";
import PcApp from "../../assets/pc_app.png";
import PcPage from "../../assets/pc_page.png";
import MobileApp from "../../assets/mobile_app.png";
import Benefits from "../../components/benefits.jsx";
import ContacMe from "../../components/contactme.jsx";

import { MdOutlineManageSearch, MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode, FaRocket } from "react-icons/fa";

export default function KuftaSoftware() {
  return (
    <main className="kufta-software-page">
      <section className="principal-section-kufta">
        <div className="text-content">
          <h3>Listo para hacer tú sueño realidad</h3>
          <h1>
            Desarrollador <br></br>Full Stack
          </h1>
          <div className="psdescription">
            <h2>
              Creamos tu página web o aplicación móvil tal como la imaginas, con
              un diseño profesional y una funcionalidad impecable que eleva tu
              proyecto al siguiente nivel.
            </h2>
          </div>
        </div>
        <div className="pc-container">
          <img src={PcImg} alt="PC with code" />
        </div>
      </section>
      <section>
        <div className="tech-wrapper">
          <div className="tech-scroll">
            <div className="technologies">
              <h2>Html</h2>
              <h2>Css</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>Bootstrap</h2>
              <h2>Node.js</h2>
              <h2>PHP</h2>
              <h2>C#</h2>
              <h2>Unity</h2>
              <h2>Express</h2>
              <h2>Django</h2>
              <h2>Flutter (Dart)</h2>
              <h2>Kotlin Jetpack Compose (Android)</h2>
              <h2>MySQL</h2>
              <h2>PostgreSQL</h2>
              <h2>MariaDB</h2>
              <h2>Firebase Firestore</h2>
              <h2>Docker</h2>
              <h2>Firebase</h2>
              <h2>GitHub</h2>
              <h2>Postman</h2>
              <h2>VS Code</h2>
              <h2>Android Studio</h2>
              <h2>WebSockets</h2>
              <h2>REST APIs</h2>
              <h2>CI/CD</h2>
            </div>

            {/* DUPLICADO para la animación infinita */}
            <div className="technologies">
              <h2>Html</h2>
              <h2>Css</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>Bootstrap</h2>
              <h2>Node.js</h2>
              <h2>PHP</h2>
              <h2>C#</h2>
              <h2>Unity</h2>
              <h2>Express</h2>
              <h2>Django</h2>
              <h2>Flutter (Dart)</h2>
              <h2>Kotlin Jetpack Compose (Android)</h2>
              <h2>MySQL</h2>
              <h2>PostgreSQL</h2>
              <h2>MariaDB</h2>
              <h2>Firebase Firestore</h2>
              <h2>Docker</h2>
              <h2>Firebase</h2>
              <h2>GitHub</h2>
              <h2>Postman</h2>
              <h2>VS Code</h2>
              <h2>Android Studio</h2>
              <h2>WebSockets</h2>
              <h2>REST APIs</h2>
              <h2>CI/CD</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="kufta-solutions">
        {/* Texto — Imagen */}
        <div className="row-with-info">
          <div className="text-block">
            <h1>Aplicaciones móviles</h1>
            <h3>
              Desarrollamos aplicaciones móviles ágiles, intuitivas y totalmente
              adaptadas a tus objetivos, para que tu negocio acompañe a tus
              clientes en cada momento desde la comodidad de su smartphone.
            </h3>
          </div>
          <img src={MobileApp} alt="aplication-mobile" />
        </div>

        {/* Imagen — Texto */}
        <div className="row-with-info reverse">
          <div className="text-block">
            <h1>Páginas web</h1>
            <h3>
              Diseñamos páginas web modernas, rápidas y hechas a medida,
              pensadas para impulsar tu presencia digital y conectar de forma
              auténtica con tus clientes.
            </h3>
          </div>
          <img src={PcPage} alt="page-web" />
        </div>
        {/* Texto — Imagen */}
        <div className="row-with-info">
          <div className="text-block">
            <h1>Aplicaciones web</h1>
            <h3>
              Desarrollamos aplicaciones web y de escritorio que hacen tu
              trabajo más fácil y tu negocio más eficiente, combinando
              tecnología confiable con una experiencia diseñada para que tú y
              tus clientes disfruten cada interacción.
            </h3>
          </div>
          <img src={PcApp} alt="aplication-web" />
        </div>
      </section>
      <section className="how-i-do">
        <h1>¿Cómo lo hago?</h1>

        <div className="how-row">
          <div className="how-card">
            <MdOutlineManageSearch className="how-icon" />
            <h2>Planificación</h2>
            <p>
              Analizo tu idea, defino objetivos y organizo el camino del
              proyecto.
            </p>
          </div>

          <div className="how-card">
            <MdOutlineDesignServices className="how-icon" />
            <h2>Diseño</h2>
            <p>
              Creo una estructura visual clara, moderna y centrada en tus
              usuarios.
            </p>
          </div>

          <div className="how-card">
            <FaLaptopCode className="how-icon" />
            <h2>Desarrollo</h2>
            <p>
              Construyo tu solución con tecnología estable y buenas prácticas.
            </p>
          </div>

          <div className="how-card">
            <FaRocket className="how-icon" />
            <h2>Entrega</h2>
            <p>Realizo pruebas finales y dejo tu producto listo para usar.</p>
          </div>
        </div>

       <Benefits></Benefits>
      </section>
      <ContacMe></ContacMe>
    </main>
  );
}
