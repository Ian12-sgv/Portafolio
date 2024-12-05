// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import "../Style/Navbar.css";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

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

  return (
    <nav className="navbar">
      {" "}
      <a
        href="#presentacion"
        className={activeSection === "presentacion" ? "active" : ""}
      >
        Presentación
      </a>{" "}
      <a
        href="#habilidades"
        className={activeSection === "habilidades" ? "active" : ""}
      >
        Habilidades
      </a>{" "}
      <a
        href="#proyectos"
        className={activeSection === "proyectos" ? "active" : ""}
      >
        Proyectos
      </a>{" "}
      <a
        href="#formacion"
        className={activeSection === "formacion" ? "active" : ""}
      >
        Formación
      </a>{" "}
      <a
        href="#servicio"
        className={activeSection === "servicio" ? "active" : ""}
      >
        Servicio
      </a>{" "}
    </nav>
  );
};

export default Navbar;
