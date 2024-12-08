import "../Style/Proyectos.css";
import Proyecto from "./Proyecto";
import FoodTruck from "../assets/FoodTruck.png";
import V8 from "../assets/V8.png";
import Portafolio from "../assets/Portafolio.png";

function Proyectos() {
  return (
    <div className="Proyectos">
      Proyectos
      <div className="proyectos-container">
        <div>
          <Proyecto
            src={FoodTruck}
            titulo="Food Truck"
            descripcion="Es un sistema de pedido para comida rapida, donde los clientes pueden realizar pedidos y pagar con tarjeta de credito o debito, fue mi primer proyecto en react estoy mejorando la responsividad"
            tecnoligias={["React", "Html", "Css", "Javascript"]}
            git="https://github.com/Ian12-sgv/food"
            verProyecto="https://camiondecomida.netlify.app/"
          />
        </div>

        <div>
          <Proyecto
            src={V8}
            titulo="V8"
            descripcion="Es un sistema de pedido para comida rapida, donde los clientes pueden realizar pedidos y pagar con tarjeta de credito o debito, fue mi primer proyecto en react estoy mejorando la responsividad"
            tecnoligias={["React", "Html", "Css", "Javascript", "Typescript"]}
            git="https://github.com/username/project2"
            verProyecto="https://project2.com"
          />
        </div>

        <div>
          <Proyecto
            src={Portafolio}
            titulo="Mi Portafolio"
            descripcion="Este es mi portafolio, donde puedes ver mis proyectos y mi informacion personal"
            tecnoligias={[
              "React",
              "Html",
              "Css",
              "Javascript",
              "Typescript",
              "Vite",
            ]}
            git="https://github.com/Ian12-sgv/Portafolio"
            verProyecto="https://ianfranco.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
