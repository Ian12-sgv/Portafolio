import "./App.css";
import Presentacion from "./Componenete/Presentacion";
import Habilidades from "./Componenete/Habilidades";
import Formacion from "./Componenete/Formacion";
import Servicio from "./Componenete/Servicio";
import Proyectos from "./Componenete/Proyectos";
import Navbar from "./Componenete/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="portafolio">
      <Navbar />
      <main className="main">
        <section id="presentacion" className="presentacion">
          <Presentacion />
        </section>
        <section id="habilidades" className="habilidades">
          <Habilidades />
        </section>
        <section id="proyectos" className="proyectos">
          <Proyectos />
        </section>
        <section id="formacion" className="formacion">
          <Formacion />
        </section>
        <section id="servicio" className="servicio">
          <Servicio />
        </section>
      </main>
      <footer className="footer">
        <div className="contact">
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
      </footer>
    </div>
  );
}

export default App;
