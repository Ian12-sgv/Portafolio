import "../Style/Habilidades.css";
import css3 from "../assets/css.png";
import html5 from "../assets/html.png";
import js from "../assets/javascript.png";
import typeScript from "../assets/typescript.png";
import bootstrap from "../assets/svg/bootstrap.svg";
import material from "../assets/svg/material-ui.svg";
import react from "../assets/svg/react.svg";
import php from "../assets/svg/phpfont.svg";
import laravel from "../assets/svg/laravel.png";
import mysql from "../assets/svg/mysql.svg";
import node from "../assets/svg/node.svg";
import git from "../assets/svg/git.svg";
import vite from "../assets/svg/Vite.svg";
import { useTranslation } from "react-i18next";

type Skill = {
  key: string;
  src: string;
};

function Habilidades() {
  const { t } = useTranslation();

  const frontEndSkills: Skill[] = [
    { key: "css", src: css3 },
    { key: "html", src: html5 },
    { key: "javascript", src: js },
    { key: "bootstrap", src: bootstrap },
    { key: "material_ui", src: material },
    { key: "react", src: react },
  ];

  const backEndSkills: Skill[] = [
    { key: "typescript", src: typeScript },
    { key: "php", src: php },
    { key: "mysql", src: mysql },
    { key: "laravel", src: laravel },
    { key: "node", src: node },
  ];

  const complementSkills: Skill[] = [
    { key: "git", src: git },
    { key: "vite", src: vite },
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        {/* Título principal */}
        <h2 className="skills-title animate-fade-in">
          {t("skills") /* Ej: HABILIDADES */}
        </h2>

        <div className="skills-grid">
          {/* Front-end */}
          <div
            className="skills-column animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="skills-column-title">{t("frontend")}</h3>
            <div className="skills-cards-grid">
              {frontEndSkills.map((skill, index) => (
                <div
                  key={skill.key}
                  className="skill-card"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.src}
                      alt={t(skill.key)}
                      className="skill-icon-image"
                    />
                  </div>
                  <p className="skill-name">{t(skill.key)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div
            className="skills-column animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="skills-column-title">{t("backend")}</h3>
            <div className="skills-cards-grid">
              {backEndSkills.map((skill, index) => (
                <div
                  key={skill.key}
                  className="skill-card"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.src}
                      alt={t(skill.key)}
                      className="skill-icon-image"
                    />
                  </div>
                  <p className="skill-name">{t(skill.key)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complementos */}
          <div
            className="skills-column animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="skills-column-title">{t("complements")}</h3>
            <div className="skills-cards-grid">
              {complementSkills.map((skill, index) => (
                <div
                  key={skill.key}
                  className="skill-card"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.src}
                      alt={t(skill.key)}
                      className="skill-icon-image"
                    />
                  </div>
                  <p className="skill-name">{t(skill.key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
