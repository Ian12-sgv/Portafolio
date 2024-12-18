import "../Style/Proyectos.css";
import Proyecto from "./Proyecto";
import FoodTruck from "../assets/FoodTruck.png";
import V8 from "../assets/V8.png";
import Portafolio from "../assets/Portafolio.png";
import { useTranslation } from "react-i18next";

function Proyectos() {
  const { t } = useTranslation();

  return (
    <div className="Proyectos">
      {t("projects")}
      <div className="proyectos-container">
        <Proyecto
          src={FoodTruck}
          titulo={t("food_truck")}
          descripcion={t("food_truck_desc")}
          git="https://github.com/Ian12-sgv/food"
          verProyecto="https://camiondecomida.netlify.app/"
        />

        <Proyecto
          src={V8}
          titulo={t("v8")}
          descripcion={t("v8_desc")}
          git="https://github.com/username/project2"
          verProyecto="https://project2.com"
        />

        <Proyecto
          src={Portafolio}
          titulo={t("portfolio")}
          descripcion={t("portfolio_desc")}
          git="https://github.com/Ian12-sgv/Portafolio"
          verProyecto="https://ianfranco.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Proyectos;
