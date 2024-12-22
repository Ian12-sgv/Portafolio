import "../Style/Formacion.css";
import { useTranslation } from "react-i18next";

function Formacion() {
  const { t } = useTranslation();

  return (
    <div className="formacion-content">
      <h1>{t("Formation")}</h1>
      <div className="formacion-container">
        <div className="formacion-info">
          <h1>{t("education")}</h1>
          <div className="universidad-info">
            <h3>{t("university")}</h3>
            <p className="universidad">{t("unefa")}</p>
            <p>2018 - 2024</p>
          </div>
          <div className="cursos-info">
            <h3>{t("courses")}</h3>
            <ul className="cursos-lista">
              <li>{t("udemy")}</li>
              <li>{t("educacion_it")}</li>
            </ul>
          </div>
        </div>
        <div className="experiencia-info">
          <h1>{t("professional_experience")}</h1>
          <div className="experiencia-item">
            <h3>{t("frontend_dev")}</h3>
            <p>{t("nerdcom")}</p>
          </div>
          <div className="experiencia-item">
            <h3>{t("fullstack_dev")}</h3>
            <p>{t("iclam")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formacion;
