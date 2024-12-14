import React from "react";
import "../Style/Habilidades.css";

interface IconProps {
  src?: string;
  p?: string;
}

const Icon: React.FC<IconProps> = ({ src, p }) => {
  return (
    <div>
      <img src={src} className="iconos" />
      <p className="parrafo">{p}</p>
    </div>
  );
};

export default Icon;
