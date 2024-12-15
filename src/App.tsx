import "./App.css";
import Presentacion from "./Componenete/Presentacion";
import Habilidades from "./Componenete/Habilidades";
import Formacion from "./Componenete/Formacion";
import Servicio from "./Componenete/Servicio";
import Proyectos from "./Componenete/Proyectos";
import Navbar from "./Componenete/Navbar";
import Footer from "./Componenete/Footer";

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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
