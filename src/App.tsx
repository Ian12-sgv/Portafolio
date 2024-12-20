import { useState, useEffect } from "react";
import "./App.css";
import Presentacion from "./Componenete/Presentacion";
import Habilidades from "./Componenete/Habilidades";
import Formacion from "./Componenete/Formacion";
import Proyectos from "./Componenete/Proyectos";
import Navbar from "./Componenete/Navbar";
import Footer from "./Componenete/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
