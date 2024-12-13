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

function Presentacion() {
  const texts = [
    "Soy un junior con experiencia en front-end.",
    "Estoy iniciado en back-end.",
  ];
  return (
    <div className="presentacion-container">
      <div className="presentacion-content">
        <div className="imagen">
          <div className="perfilImg">
            <img src="./perfil.png" alt="Perfil" className="imagen-perfil" />
            <div className="disponible">
              <p>Disponible para trabajar</p>
              <img src="./unlock.svg" alt="unlock" className="unlock-icon" />
            </div>
          </div>
        </div>
        <div className="mi-presentacion">
          <div className="profesion">Ingeniero de Sistemas</div>
          <div className="nombre">Hola, Soy Ian Franco Bonillo</div>
          <div>
            <TextCycle texts={texts} interval={100} pause={1000} />
          </div>
          <div className="cv">
            <h3>Descargar CV</h3>
            <DownloadButton />
          </div>
          <div className="redes">
            <a
              href="https://github.com/Ian12-sgv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ian-bonillo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
            </a>
            <a href="mailto:ianbonillo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            </a>
            <a href="https://wa.me/584126665102">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
