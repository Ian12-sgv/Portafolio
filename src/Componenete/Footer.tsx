import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="contact">
      <a
        href="https://github.com/Ian12-sgv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="icon-footer" />
      </a>
      <a
        href="https://www.linkedin.com/in/ian-bonillo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-footer" />
      </a>
      <a href="mailto:ianbonillo@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-footer" />
      </a>
      <a href="https://wa.me/584126665102">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon-footer" />
      </a>
    </div>
  );
}

export default Footer;
