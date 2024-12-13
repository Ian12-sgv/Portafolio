import React from "react";
import "../Style/Proyectos.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

interface ProyectoProps {
  src: string;
  titulo: string;
  descripcion: string;
  git: string;
  verProyecto: string;
}

const Proyecto: React.FC<ProyectoProps> = ({
  src,
  titulo,
  descripcion,

  git,
  verProyecto,
}) => {
  return (
    <div className="proyecto-container">
      <div className="imagen-proyecto">
        <img src={src} className="imagen-proyecto-img" />
      </div>
      <div className="proyecto-info">
        <div className="proyecto-titulo">{titulo}</div>
        <p className="proyecto-descripcion">{descripcion}</p>

        <div className="proyecto-botones">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>GitHub</p>
            <a href={git} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" color="white" />
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>Ver Proyecto</p>
            <a href={verProyecto} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLaptop} size="1x" color="green" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
