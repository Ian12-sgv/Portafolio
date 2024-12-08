// src/components/IconWithText.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../Style/Enlace.css";

interface EnlaceProps {
  icon: IconDefinition;
  text: string;
}

const Enlace: React.FC<EnlaceProps> = ({ icon, text }) => {
  return (
    <div className="icon-with-text">
      <FontAwesomeIcon icon={icon} className="icon" />
      <span className="text">{text}</span>
    </div>
  );
};

export default Enlace;
