import "../Style/Presentacion.css";
import DownloadButton from "./CvController";
import TextCycle from "./TypingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Presentacion() {
  const { t } = useTranslation();
  const texts = [t("text1"), t("text2")];

  return (
    <div className="presentacion-container">
      <div className="presentacion-content">
        <div className="imagen">
          <div className="perfilImg">
            <img src="./perfil.png" alt="Perfil" className="imagen-perfil" />
            <div className="disponible">
              <p className="disponible-text">{t("available")}</p>
              <img src="./unlock.svg" alt="unlock" className="unlock-icon" />
            </div>
          </div>
        </div>
        <div className="mi-presentacion">
          <div className="profesion">{t("profession")}</div>
          <div className="nombre">{t("welcome")}</div>
          <div className="descripcion">
            <TextCycle texts={texts} interval={100} pause={1000} />
          </div>
          <div className="cv">
            <h3>{t("download_cv")}</h3>
            <DownloadButton />
          </div>
          <div className="redes">
            <a
              href="https://github.com/Ian12-sgv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="icon-font"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ian-bonillo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="icon-font"
              />
            </a>
            <a href="mailto:ianbonillo@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="icon-font"
              />
            </a>
            <a href="https://wa.me/584126665102">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="icon-font"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
