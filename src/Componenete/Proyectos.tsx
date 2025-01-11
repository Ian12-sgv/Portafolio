import "../Style/Proyectos.css";
import Proyecto from "./Proyecto";
import FoodTruck from "../assets/FoodTruck.png";
import Portafolio from "../assets/Portafolio.png";
import Binance from "../assets/binance.png";
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
          tecnologias={[t("react"), t("typescript")]}
          verProyecto="https://camiondecomida.netlify.app/"
        />

        <Proyecto
          src={Portafolio}
          titulo={t("portfolio")}
          descripcion={t("portfolio_desc")}
          tecnologias={[t("react"), t("typescript")]}
          verProyecto="https://ianfranco.netlify.app/"
        />

        <Proyecto
          src={Binance}
          titulo={t("Binance")}
          descripcion={t("binanance")}
          tecnologias={[t("react"), t("typescript"), t("api")]}
          verProyecto="https://api-binance-estadistica.netlify.app"
        />
      </div>
    </div>
  );
}

export default Proyectos;
