import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import style from "./contactme.module.css";

export default function Contactme() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError(true);
      return;
    }

    setError(false);

    const subject = encodeURIComponent("Hola Andrés, vengo de Kufta");
    const body = encodeURIComponent(
      `Hola Andrés,\n\n` +
        `Mi nombre es: ${name || "Anónimo"}\n` +
        `Mi correo es: ${email}\n\n` +
        `Mensaje:\n${message || "Sin mensaje"}`,
    );

    window.location.href = `mailto:tech.andresb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <form className={style.contactme_wraper} onSubmit={handleSubmit}>
        <div className={style.row}>
          <div className={style.column1}>
            <h2 className={style.send_message}>¡Envíame un mensaje!</h2>

            <div className={style.input_group}>
              <FiUser />
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={style.input_group}>
              <FiMail />
              <input
                type="email"
                placeholder="Correo electrónico *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={style.input_group}>
              <FiMessageSquare />
              <textarea
                placeholder="Tu mensaje"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {error && (
              <span className={style.error}>
                El correo es obligatorio para enviar el mensaje
              </span>
            )}

            <button type="submit">Enviar mensaje</button>
          </div>
          <div className={style.column2}>
            <a
              href="mailto:tech.andresb@gmail.com"
              target="_blank"
              className={style.social_card}
            >
              <FiMail />
              <span>Mi correo</span>
            </a>
            <a
              href="https://github.com/andycdev"
              target="_blank"
              className={style.social_card}
            >
              <FiGithub />
              <span>Portafolio de Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/andres-cuevas-a6612139a/"
              target="_blank"
              className={style.social_card}
            >
              <FiLinkedin />
              <span>Perfil de linkedin</span>
            </a>
          </div>
        </div>
      </form>

      <footer>
        <div className={style.line}></div>
        <div className={style.text_footer}>
          Copyright © 2026 <strong>Kufta Software</strong> Todos los derechos
          reservados.
        </div>
      </footer>
    </>
  );
}
