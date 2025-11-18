import React, { useState, useEffect } from "react";
import Enlace from "./Enlace";
import {
  faHome,
  faLayerGroup,
  faBookOpen,
  faLaptopCode,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Moon, Sun } from "lucide-react";
import "../Style/Navbar.css";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

type NavItem = {
  id: string;
  label: string;
  labelShort?: string;
  icon: any;
};

const navItems: NavItem[] = [
  { id: "presentacion", label: "Inicio", labelShort: "Inicio", icon: faHome },
  { id: "habilidades", label: "Habilidades", icon: faLayerGroup },
  { id: "proyectos", label: "Proyectos", icon: faLaptopCode },
  { id: "formacion", label: "Formación", icon: faBookOpen },
];

// duración de la animación en ms (debe coincidir con el CSS)
const MENU_ANIMATION_MS = 550;

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>("presentacion");

  // isOpen = panel completamente abierto
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // isClosing = está corriendo la animación de cierre
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const isMenuVisible = isOpen || isClosing;

  // === Scroll spy (sección activa) ===
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollPos = window.scrollY;
      let currentSection = activeSection;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        // margen para compensar la altura del header
        if (
          scrollPos >= offsetTop - 120 &&
          scrollPos < offsetTop + height - 120
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // marcar la sección inicial al cargar
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // === Bloquear scroll cuando el menú (modal) está visible en mobile ===
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (isMobile && isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuVisible]);

  const openMenu = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    // si ya está cerrando, no repetir
    if (!isOpen || isClosing) return;

    setIsClosing(true);

    // esperamos a que termine la animación CSS
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, MENU_ANIMATION_MS);
  };

  const toggleMenu = () => {
    if (!isMenuVisible) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  // === Scroll suave con offset del header ===
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (!el) {
      closeMenu();
      return;
    }

    const headerOffset = 120; // altura aproximada del navbar
    const rect = el.getBoundingClientRect();
    const offset = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    closeMenu();
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Botón menú móvil (solo visible por CSS en <=1024px) */}
      <div className="button-container">
        <button
          className="floating-bubble"
          onClick={toggleMenu}
          aria-label={isMenuVisible ? "Cerrar menú" : "Abrir menú"}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Contenedor principal: enlaces + toggle de tema */}
      <ul
        className={`nav-links ${isMenuVisible ? "open" : ""} ${
          isClosing ? "closing" : ""
        }`}
      >
        {/* Botón de cierre redondo dentro del modal (solo mobile) */}
        {isMenuVisible && (
          <button
            type="button"
            className="close-modal-btn"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}

        {navItems.map((item, index) => (
          <li
            key={item.id}
            className="nav-item-fade"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <Enlace icon={item.icon} text={item.label} />
            </a>
          </li>
        ))}

        {/* Toggle de tema con iconos Lucide (Moon / Sun) */}
        <div className="theme-toggle-container">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label="Cambiar tema"
          >
            {isDarkMode ? (
              <Sun className="theme-icon sun-icon" />
            ) : (
              <Moon className="theme-icon moon-icon" />
            )}
          </button>
        </div>
      </ul>

      {/* Overlay para efecto modal: click fuera del panel cierra el menú */}
      {isMenuVisible && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;
