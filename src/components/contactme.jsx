// src/components/Contactenos.jsx
import { useState } from "react";
import {
  FaHeart,
  FaLinkedin,
  FaWhatsapp,
  FaCheckCircle,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import "./contactme.css";

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // éxito o error
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Construimos el correo perfecto
    const subject = encodeURIComponent(`¡Hola Felipe! Soy ${formData.name}`);
    const body = encodeURIComponent(
      `Hola Felipe,

Soy ${formData.name}
Mi correo: ${formData.email}

${formData.message}

¡Quedo atento a tu respuesta!
Saludos,
${formData.name}`
    );

    // Abrimos el cliente de correo
    window.location.href = `mailto:tech.andresb@gmail.com?subject=${subject}&body=${body}`;

    // Mensaje de éxito
    {
      status === "success" && (
        <p className="success-msg">
          ¡Listo! Se abrió tu correo con el mensaje completo
          <br />
          Solo dale "Enviar" desde tu app de correo
        </p>
      );
    }

    {
      status === "error" && (
        <p className="error-msg">Por favor completa todos los campos</p>
      );
    }
  };

  return (
    <section className="contactenos-section" id="contacto">
      <div className="container-contactme">
        <div className="contacto-grid">
          {/* Formulario */}
          <div className="form-container">
            <h2>Envíame un mensaje</h2>
            <p>
              No lo pienses más, ¡tu próximo proyecto empieza con un "hola"!
            </p>

            <form onSubmit={handleSubmit} className="contacto-form">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-submit"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="success-msg">
                  <FaCheckCircle /> ¡Mensaje enviado! Te respondo en menos de
                  24h
                </p>
              )}
              {status === "error" && (
                <p className="error-msg">
                  Ups, algo salió mal. Inténtalo de nuevo.
                </p>
              )}
            </form>
          </div>

          {/* Info de contacto + redes */}
          <div className="info-container">
            <h2>Mi contacto</h2>

            <div className="redes-sociales">
              <a
                href="mailto:tech.andresb@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaMailBulk /> Correo
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://instagram.com/andreezcuevas"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram /> Instagram
              </a>

              <a
                href="https://wa.me/573012717380"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
          <div className="contacto-footer">
            <div className="footer-line"></div>
            <p className="footer-text">
              © {currentYear} <strong>KUFTA Software</strong>
            </p>
            <p className="footer-tagline">
              Hecho con <FaHeart className="heart" /> por Felipe
              <br />
              <span>El código es arte. El futuro es ahora.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
