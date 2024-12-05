import React from "react";
import "../Style/Presentacion.css";
import downloadIcon from "../assets/descargar.svg"; // Import as a module

const DownloadButton: React.FC = () => {
  return (
    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
      <img src={downloadIcon} alt="Download CV" className="download-button" />
    </a>
  );
};

export default DownloadButton;
