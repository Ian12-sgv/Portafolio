import "../Style/Proyectos.css";
import Proyecto from "./Proyecto";
import FoodTruck from "../assets/FoodTruck.png";
import Portafolio from "../assets/Portafolio.png";
import Binance from "../assets/binance.png";
import Suscripcion from "../assets/Suscripciones.png";
import Convertidor from "../assets/convertidor.png";
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
          tecnologias={[t("react"), t("typescript"), t("api"), t("chart.js")]}
          verProyecto="https://api-binance-estadistica.netlify.app"
        />
        <Proyecto
          src={Suscripcion}
          titulo={t("Suscripcion")}
          descripcion={t("suscripcion")}
          tecnologias={[t("react"), t("typescript")]}
          verProyecto="https://costo-suscripciones.netlify.app/"
        />
        <Proyecto
          src={Convertidor}
          titulo={t("Convertidor")}
          descripcion={t("convertidor")}
          tecnologias={[t("react"), t("material-ui"), t("API REST")]}
          verProyecto="https://convertidor-de-divisas.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Proyectos;
