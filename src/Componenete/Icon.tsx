import React from "react";

interface IconProps {
  src?: string;
  p?: string;
}

const Icon: React.FC<IconProps> = ({ src }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={src}
        style={{ width: "50px", height: "50px", paddingBottom: "10px" }}
      />
    </div>
  );
};

export default Icon;
