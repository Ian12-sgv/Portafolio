import "../Style/Habilidades.css";
import Icon from "./Icon";
import css3 from "../assets/css.png";
import html5 from "../assets/html.png";
import js from "../assets/javascript.png";
import typreScript from "../assets/typescript.png";
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

function Habilidades() {
  const { t } = useTranslation();

  return (
    <div className="Habilidades">
      {t("skills")}
      <div className="aprendiendo-container">
        <div className="aprendiendo-front">
          <h1 className="titulo">{t("frontend")}</h1>
          <div className="front">
            <div>
              <Icon src={css3} p={t("css")} />
            </div>
            <div>
              <Icon src={html5} p={t("html")} />
            </div>
            <div>
              <Icon src={js} p={t("javascript")} />
            </div>
            <div>
              <Icon src={bootstrap} p={t("bootstrap")} />
            </div>
            <div>
              <Icon src={material} p={t("material_ui")} />
            </div>
            <div>
              <Icon src={react} p={t("react")} />
            </div>
          </div>
        </div>

        <div className="aprendiendo-back">
          <h1 className="titulo">{t("backend")}</h1>
          <div className="back">
            <div>
              <Icon src={typreScript} p={t("typescript")} />
            </div>
            <div>
              <Icon src={php} p={t("php")} />
            </div>
            <div>
              <Icon src={mysql} p={t("mysql")} />
            </div>
            <div>
              <Icon src={laravel} p={t("laravel")} />
            </div>
            <div>
              <Icon src={node} p={t("node")} />
            </div>
          </div>
        </div>

        <div className="aprendiendo-complementos">
          <h1 className="titulo">{t("complements")}</h1>
          <div className="complementos">
            <div>
              <Icon src={git} p={t("git")} />
            </div>
            <div>
              <Icon src={vite} p={t("vite")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
