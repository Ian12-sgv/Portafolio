import React, { useState, useEffect } from "react";
import Enlace from "./Enlace";
import {
  faHome,
  faLayerGroup,
  faBookOpen,
  faLaptopCode,
  faSun,
  faMoon,
  faBars,
  faTimes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Navbar.css";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="button-container">
        <div className="floating-bubble" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a
            href="#presentacion"
            className={activeSection === "presentacion" ? "active" : ""}
            onClick={handleLinkClick}
          >
            <Enlace icon={faHome} text="Inicio" />
          </a>
        </li>
        <li>
          <a
            href="#habilidades"
            className={activeSection === "habilidades" ? "active" : ""}
            onClick={handleLinkClick}
          >
            <Enlace icon={faLayerGroup} text="Habilidades" />
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className={activeSection === "proyectos" ? "active" : ""}
            onClick={handleLinkClick}
          >
            <Enlace icon={faLaptopCode} text="Proyectos" />
          </a>
        </li>
        <li>
          <a
            href="#formacion"
            className={activeSection === "formacion" ? "active" : ""}
            onClick={handleLinkClick}
          >
            <Enlace icon={faBookOpen} text="Formacion" />
          </a>
        </li>
        <div className="theme-toggle-container">
          <div>
            {" "}
            <a onClick={toggleTheme} className="theme-toggle-button">
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </a>
          </div>
          <div>
            {isOpen && (
              <a onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "Red" }} />
              </a>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
