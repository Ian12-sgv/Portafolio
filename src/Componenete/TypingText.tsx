import React, { useState, useEffect } from "react";
import "../Style/Presentacion.css";

interface TextCycleProps {
  texts: string[];
  interval?: number; // Tiempo entre cada letra (en ms)
  pause?: number; // Tiempo de espera antes de cambiar al siguiente texto (en ms)
}

const TextCycle: React.FC<TextCycleProps> = ({
  texts,
  interval = 100,
  pause = 1000,
}) => {
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texts[currentText].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentText][index]);
        setIndex(index + 1);
      }, interval);

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setCurrentText((prev) => (prev + 1) % texts.length);
      }, pause);

      return () => clearTimeout(timeoutId);
    }
  }, [index, texts, currentText, interval, pause]);

  return <div className="text-container">{displayedText}</div>;
};

export default TextCycle;
