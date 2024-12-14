import "../Style/Habilidades.css";
import Icon from "./Icon";
import css3 from "../assets/css.png";
import html5 from "../assets/html.png";
import js from "../assets/javascript.png";
import typreScript from "../assets/typescript.png";
import bootstrap from "../assets/svg/bootstrap.svg";
import material from "../assets/svg/material-ui.png";
import react from "../assets/svg/react.svg";
import php from "../assets/svg/phpfont.svg";
import laravel from "../assets/svg/laravel.png";
import mysql from "../assets/svg/mysql.png";
import node from "../assets/svg/node.svg";
import git from "../assets/svg/git.svg";
import vite from "../assets/svg/Vite.svg";
function Habilidades() {
  return (
    <div className="Habilidades">
      HABILIADES
      <div className="aprendiendo-container">
        <div className="aprendiendo-front">
          <h1 className="titulo">Front-end</h1>
          <div className="front">
            <div>
              <Icon src={css3} p="CSS" />
            </div>
            <div>
              {" "}
              <Icon src={html5} p="HTML" />
            </div>
            <div>
              {" "}
              <Icon src={js} p="JavaScript" />
            </div>
            <div>
              {" "}
              <Icon src={bootstrap} p="Bootstrap" />
            </div>
            <div>
              {" "}
              <Icon src={material} p="Material UI" />
            </div>
            <div>
              {" "}
              <Icon src={react} p="React" />
            </div>
          </div>
        </div>

        <div className="aprendiendo-back">
          <h1 className="titulo">Back-end</h1>
          <div className="back">
            <div>
              <Icon src={typreScript} p="TypeScript" />
            </div>
            <div>
              <Icon src={php} p="PHP" />
            </div>
            <div>
              <Icon src={mysql} p="MySql" />
            </div>
            <div>
              <Icon src={laravel} p="Laravel" />
            </div>
            <div>
              <Icon src={node} p="Node" />
            </div>
          </div>
        </div>

        <div className="aprendiendo-complementos">
          <h1 className="titulo">Complementos</h1>
          <div className="complementos">
            <div>
              <Icon src={git} p="Git" />
            </div>
            <div>
              <Icon src={vite} p="Vite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
