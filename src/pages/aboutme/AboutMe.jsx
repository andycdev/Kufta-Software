// AboutMe.jsx
import React from "react";
import style from "./AboutMe.module.css";
import ContactMe from "../../components/contactme/Contactme.jsx";
import Skill from "../../components/skill/Skill.jsx";
import Me from "../../assets/about_me/creator.jpg";

export default function AboutMe() {
  return (
    <div className={style.aboutme_wrapper}>
      <div className={style.me}>
        <div className={style.photo_wrapper}>
          <img src={Me} alt="Creador" />

          {/* burbujas */}
          <span className={`${style.bubble} ${style.b1}`}></span>
          <span className={`${style.bubble} ${style.b2}`}></span>
          <span className={`${style.bubble} ${style.b3}`}></span>
          <span className={`${style.bubble} ${style.b4}`}></span>
          <span className={`${style.bubble} ${style.b5}`}></span>
        </div>
        <div className={style.column_text}>
          <h1>Hola, soy Felipe.</h1>
          <p>
            Me especializo en el{" "}
            <strong>desarrollo de aplicaciones web y móviles</strong>, creando
            soluciones tecnológicas funcionales y bien estructuradas. Tengo
            experiencia en soporte de sistemas, tecnologías de la información y
            gestión de herramientas TIC, tanto en proyectos independientes como
            en entornos profesionales.
          </p>
        </div>
      </div>

      <div className={style.iknow}>
        <h2>Mis habilidades</h2>

        <p>
          Como desarrollador fullstack con conocimientos en sistemas y
          tecnologías de la información, he trabajado con distintos lenguajes,
          frameworks y herramientas, aplicándolos en proyectos reales y
          manteniendo un enfoque constante en la mejora continua.
        </p>

        <h3>Frameworks</h3>
        <div className={style.skils}>
          <Skill
            icon="/assets/skills/flutter.png"
            name="Flutter"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/jetpack_compose.png"
            name="Jetpack Compose"
            type="Framework (UI para Android)"
          />
          <Skill icon="/assets/skills/react.png" name="React" type="Librería" />
          <Skill
            icon="/assets/skills/django.png"
            name="Django"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/express.png"
            name="Express.js"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/dotnet.png"
            name=".Net"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/angular.png"
            name="Angular"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/fastapi.png"
            name="FastAPI"
            type="Framework"
          />
          <Skill
            icon="/assets/skills/spring_boot.png"
            name="Spring boot"
            type="Framework"
          />
        </div>
        <h3>Lenguajes</h3>
        <div className={style.skils}>
          <Skill icon="/assets/skills/dart.png" name="Dart" type="Lenguaje" />
          <Skill
            icon="/assets/skills/kotlin.png"
            name="Kotlin"
            type="Lenguaje"
          />

          <Skill icon="/assets/skills/php.png" name="PHP" type="Lenguaje" />

          <Skill
            icon="/assets/skills/typescript.png"
            name="TypeScript"
            type="Lenguaje"
          />
          <Skill
            icon="/assets/skills/csharp.png"
            name="C#"
            type="Lenguaje"
          />
          <Skill
            icon="/assets/skills/html.png"
            name="HTML"
            type="Lenguaje de marcado"
          />
          <Skill
            icon="/assets/skills/css.png"
            name="CSS"
            type="Lenguaje de estilos"
          />
          <Skill
            icon="/assets/skills/javascript.png"
            name="JavaScript"
            type="Lenguaje"
          />
          <Skill
            icon="/assets/skills/python.png"
            name="Python"
            type="Lenguaje"
          />
          <Skill icon="/assets/skills/java.png" name="Java" type="Lenguaje" />
        </div>
        <h3>Herramientas</h3>
        <div className={style.skils}>
          <Skill
            icon="/assets/skills/nodejs.png"
            name="Node.js"
            type="Entorno de ejecución"
          />
          <Skill
            icon="/assets/skills/docker.png"
            name="Docker"
            type="Herramienta"
          />
          <Skill
            icon="/assets/skills/githubactions.png"
            name="GitHub Actions"
            type="Herramienta"
          />
          <Skill icon="/assets/skills/git.png" name="Git" type="Herramienta" />
          <Skill
            icon="/assets/skills/firebase.png"
            name="Firebase"
            type="Plataforma Cloud / BaaS"
          />
          <Skill
            icon="/assets/skills/postman.png"
            name="Postman"
            type="Herramienta para APIs"
          />
          <Skill
            icon="/assets/skills/figma.png"
            name="Figma"
            type="Diseño UI/UX"
          />
          <Skill
            icon="/assets/skills/vscode.png"
            name="Visual Studio Code"
            type="IDE"
          />
          <Skill
            icon="/assets/skills/android_studio.png"
            name="Android Studio"
            type="IDE"
          />
          <Skill
            icon="/assets/skills/blender.png"
            name="Blender"
            type="Modelado 3D"
          />
          <Skill
            icon="/assets/skills/unity.webp"
            name="Unity"
            type="Motor de videojuegos / desarrollo 3D"
          />
        </div>
        <h3>Conocimiento de sistemas</h3>
        <div className={style.skils}>
          <Skill
            icon="/assets/skills/windows.webp"
            name="Windows"
            type="Sistema operativo"
          />
          <Skill
            icon="/assets/skills/macos.png"
            name="macOS"
            type="Sistema operativo"
          />
          <Skill
            icon="/assets/skills/linux.png"
            name="Linux"
            type="Sistema operativo"
          />

          <Skill
            icon="/assets/skills/bash.png"
            name="Bash"
            type="Shell / Scripting"
          />
          <Skill
            icon="/assets/skills/wmware.png"
            name="VMware"
            type="Virtualización"
          />
        </div>
        <h3>Sistemas y soporte TI</h3>
        <div className={style.skils}>
          <Skill
            icon="/assets/skills/redes.png"
            name="Redes"
            type="Configuración y diagnóstico"
          />
          <Skill
            icon="/assets/skills/hardware.png"
            name="Hardware y perifericos"
            type="Instalación y soporte"
          />
          <Skill
            icon="/assets/skills/soporte_ti.png"
            name="Soporte TI"
            type="Resolución de incidencias"
          />
        </div>
      </div>

      <div className={style.line}></div>

      <div className={style.my_route}>
        <div className={style.route_left}>
          <h2 style={{ paddingBottom: "10px" }}>Mi ruta</h2>
          <p>
            Aquí presento el recorrido que he desarrollado en tecnología,
            integrando conocimientos en sistemas, desarrollo de software y
            soporte técnico. Cada etapa ha fortalecido mi capacidad para
            analizar problemas, adaptarme a nuevos entornos y construir
            soluciones digitales eficientes, tanto en proyectos independientes
            como en contextos empresariales.
          </p>
        </div>

        <div className={style.route_right}>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2021</h2>
              <p>
                Finalizo mi bachillerato con un desempeño académico destacado,
                sentando las bases de disciplina y compromiso profesional.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2021</h2>
              <p>
                Me gradúo con honores en Contabilización de Operaciones
                Financieras, desarrollando una sólida comprensión de procesos,
                análisis y gestión.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2022</h2>
              <p>
                Inicio la Tecnología en Análisis y Desarrollo de Software,
                enfocado en transformar ideas en soluciones digitales
                funcionales.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2022 a 2024</h2>
              <p>
                Desarrollo proyectos personales y colaborativos, aplicando
                conocimientos en frontend, backend, bases de datos y buenas
                prácticas de desarrollo.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2024</h2>
              <p>
                Presento mi proyecto de grado: una aplicación móvil Android
                basada en carreras de observación dentro del campus, integrando
                animaciones y elementos 3D.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2024</h2>
              <p>
                Diseño y desarrollo el sitio web corporativo de una empresa
                durante mis prácticas, combinando desarrollo web y soporte
                técnico en TI.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2024 - presente</h2>
              <p>
                Inicio mi experiencia laboral profesional desarrollando
                aplicaciones de cotización, integraciones con SAP, soluciones
                móviles y plataformas web para entornos empresariales.
              </p>
            </div>
          </div>
          <div className={style.route_item}>
            <div className={style.column}>
              <h2>2025 - presente</h2>
              <p>
                Inicio mi formación profesional en Ingeniería de Sistemas en la
                UNAD, fortaleciendo mis bases teóricas y técnicas para seguir
                creciendo como desarrollador y profesional en tecnología.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.line}></div>

      <ContactMe />
    </div>
  );
}
