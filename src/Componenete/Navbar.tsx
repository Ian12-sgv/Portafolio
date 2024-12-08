// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import Enlace from "./Enlace";
import {
  faHome,
  faLayerGroup,
  faBookOpen,
  faLaptopCode,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "../Style/Navbar.css";

const Navbar: React.FC = () => {
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
    <nav className="navbar">
      <div className="floating-bubble" onClick={toggleMenu}>
        &#9776;
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
        <li>
          <a
            href="#servicio"
            className={activeSection === "servicio" ? "active" : ""}
            onClick={handleLinkClick}
          >
            <Enlace icon={faBriefcase} text="Servicios" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
