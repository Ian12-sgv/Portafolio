// src/App.tsx
import { useEffect, useState } from "react";
import "./App.css";

import Presentacion from "./Componenete/Presentacion";
import Habilidades from "./Componenete/Habilidades";
import Formacion from "./Componenete/Formacion";
import Proyectos from "./Componenete/Proyectos";
import Navbar from "./Componenete/Navbar";
import Footer from "./Componenete/Footer";

// Lee el tema inicial desde localStorage o desde la configuración del sistema
const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  // Si no hay nada guardado, usamos el tema del sistema
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`portafolio ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

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
      </main>
    </div>
  );
}

export default App;
