import "../Style/Presentacion.css";
import TextCycle from "./TypingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import type { FC } from "react";

const Presentacion: FC = () => {
  const { t } = useTranslation();
  const texts = [t("text1"), t("text2")];

  return (
    <section className="presentacion-container">
      <div className="presentacion-content">
        {/* CÍRCULO / FOTO */}
        <div className="hero-avatar">
          <div className="hero-avatar-inner">
            <img
              src="/perfil.png"
              alt={t("welcome")}
              className="hero-avatar-img"
            />
          </div>

          <div className="hero-status">
            <span className="hero-status-pill">
              <span className="hero-status-dot" />
              <span className="hero-status-text">{t("available")}</span>
            </span>
          </div>
        </div>

        {/* TEXTO */}
        <div className="mi-presentacion">
          <p className="profesion">{t("profession")}</p>

          <h1 className="nombre">{t("welcome")}</h1>

          <div className="descripcion">
            <TextCycle texts={texts} interval={100} pause={1000} />
          </div>

          {/* BOTÓN PRINCIPAL CV */}
          <div className="hero-actions">
            <a href="/cv.pdf" download className="hero-btn-primary">
              <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
              <span>{t("download_cv")}</span>
            </a>
          </div>

          {/* REDES SOCIALES */}
          <div className="redes" aria-label="Redes sociales">
            <a
              href="https://github.com/Ian12-sgv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="social-icon-card">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ian-bonillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-icon-card">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </span>
            </a>

            <a
              href="mailto:ianbonillo@gmail.com"
              aria-label="Enviar correo"
              rel="noopener noreferrer"
            >
              <span className="social-icon-card">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </span>
            </a>

            <a
              href="https://wa.me/584126665102"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span className="social-icon-card">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
