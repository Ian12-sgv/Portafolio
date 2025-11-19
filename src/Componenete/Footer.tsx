// src/Componenete/Footer.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Ian12-sgv",
      icon: faGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ian-bonillo",
      icon: faLinkedin,
    },
    {
      label: "Email",
      href: "mailto:ianbonillo@gmail.com",
      icon: faEnvelope,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/584126665102",
      icon: faWhatsapp,
    },
  ];

  return (
    <div className="footer-content">
      {/* Grid principal */}
      <div className="footer-grid">
        {/* Nombre y título */}
        <div className="footer-name-block">
          <h3 className="footer-name">Ian Franco Bonillo</h3>
          <p className="footer-role">Desarrollador Full-Stack</p>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={social.label}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="footer-social-icon"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-copy-block">
          <p className="footer-copy">© {year} Ian Franco Bonillo</p>
          <p className="footer-copy-small">Todos los derechos reservados</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-divider">
        <p className="footer-made">
          Hecho con <span className="footer-heart">❤️</span> y React
        </p>
      </div>
    </div>
  );
}

export default Footer;
