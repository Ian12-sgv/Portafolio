// src/Componenete/Formacion.tsx
import "../Style/Formacion.css";
import { useTranslation } from "react-i18next";

function Formacion() {
  const { t } = useTranslation();

  return (
    <div className="formacion-section">
      <div className="formacion-container">
        {/* Título principal */}
        <h2 className="formacion-title animate-fade-in">{t("formation")}</h2>

        <div className="formacion-grid">
          {/* ================= EDUCACIÓN ================= */}
          <div
            className="formacion-column animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="formacion-subtitle">{t("education")}</h3>

            {/* Universidad */}
            <div className="form-card">
              <div className="form-card-header">
                <div className="form-card-icon">🎓</div>
                <div className="form-card-body">
                  <p className="form-card-title">{t("university")}</p>
                  <p className="form-card-text universidad">{t("unefa")}</p>
                  <p className="form-card-meta">2018 - 2024</p>
                </div>
              </div>
            </div>

            {/* Cursos */}
            <div className="form-courses">
              <h4 className="form-courses-title">{t("courses")}</h4>

              <div className="form-card">
                <div className="form-card-header">
                  <div className="form-card-icon">📚</div>
                  <div className="form-card-body">
                    <p className="form-card-title">{t("udemy")}</p>
                  </div>
                </div>
              </div>

              <div className="form-card">
                <div className="form-card-header">
                  <div className="form-card-icon">💻</div>
                  <div className="form-card-body">
                    <p className="form-card-title">{t("educacion_it")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== EXPERIENCIA PROFESIONAL ========== */}
          <div
            className="formacion-column animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="formacion-subtitle">
              {t("professional_experience")}
            </h3>

            {/* Desarrollador Front-end */}
            <div className="form-card">
              <div className="form-card-header">
                <div className="form-card-icon">💼</div>
                <div className="form-card-body">
                  <p className="form-card-title">
                    {t("Ingeniero de sistemas")}
                  </p>
                  <p className="form-card-text">
                    {t("Palacio del blumer")} - 1 año
                  </p>
                </div>
              </div>
            </div>

            {/* Desarrollador Front-end */}
            <div className="form-card">
              <div className="form-card-header">
                <div className="form-card-icon">💼</div>
                <div className="form-card-body">
                  <p className="form-card-title">{t("frontend_dev")}</p>
                  <p className="form-card-text">{t("nerdcom")} - 6 meses</p>
                </div>
              </div>
            </div>

            {/* Desarrollador Full-Stack */}
            <div className="form-card">
              <div className="form-card-header">
                <div className="form-card-icon">🚀</div>
                <div className="form-card-body">
                  <p className="form-card-title">{t("fullstack_dev")}</p>
                  <p className="form-card-text">{t("iclam")} - 6 meses</p>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================= */}
        </div>
      </div>
    </div>
  );
}

export default Formacion;
