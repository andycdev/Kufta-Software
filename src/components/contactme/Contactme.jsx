import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import style from "./Contactme.module.css";

export default function Contactme() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [showToast, setShowToast] = useState(false);
  const [hideToast, setHideToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isError, setIsError] = useState(false); // Opcional: para cambiar el color si falla
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name || name.trim().length < 3 || name.trim().length > 50) {
      newErrors.name = "El nombre debe tener entre 3 y 50 caracteres";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (!message || message.trim().length < 5 || message.trim().length > 255) {
      newErrors.message = "El mensaje debe tener entre 5 y 255 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        // <--- Ruta relativa para Vercel
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Si el servidor responde con error (ej. 400 o 500)
        throw new Error(data.error || "Algo salió mal");
      }

      // --- ÉXITO ---
      setToastMsg("¡Mensaje enviado con éxito 🚀!");
      setIsError(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setToastMsg(error.message || "Error de conexión ❌");
      setIsError(true);
    } finally {
      setIsLoading(false);
      triggerToast();
    }
  };

  // Función auxiliar para no repetir los timeouts
  const triggerToast = () => {
    setShowToast(true);
    setHideToast(false);

    setTimeout(() => setHideToast(true), 2500);
    setTimeout(() => {
      setShowToast(false);
      setHideToast(false);
    }, 3200);
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
                minLength={3}
                maxLength={50}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {errors.name && <span className={style.error}>{errors.name}</span>}

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
            {errors.email && (
              <span className={style.error}>{errors.email}</span>
            )}

            <div className={style.input_group}>
              <FiMessageSquare />
              <textarea
                placeholder="Tu mensaje"
                rows={4}
                maxLength={255}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {errors.message && (
              <span className={style.error}>{errors.message}</span>
            )}

            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className={style.spinner}></div>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </div>
          <div className={style.column2}>
            <a
              href="https://www.instagram.com/kufta.software"
              target="_blank"
              className={style.social_card}
            >
              <FiInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61588525134503&locale=es_LA"
              target="_blank"
              className={style.social_card}
            >
              <FiFacebook />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/in/andres-cuevas-a6612139a/"
              target="_blank"
              className={style.social_card}
            >
              <FiLinkedin />
              <span>Linkedin</span>
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

      {showToast && (
        <div
          className={`${style.toast} ${hideToast ? style.toastHide : ""} ${isError ? style.toastError : ""}`}
        >
          {toastMsg}
        </div>
      )}
    </>
  );
}
