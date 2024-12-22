import React from "react";
import "../Style/Presentacion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadButton: React.FC = () => {
  return (
    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faDownload} className="download-button" />
    </a>
  );
};

export default DownloadButton;
