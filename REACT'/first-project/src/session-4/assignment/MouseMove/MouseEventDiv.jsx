import React from "react";
import "./MouseEventDiv.scss";
import usePos from "../hooks/usePos";

const MouseEventDiv = ({ shape, background }) => {
  const [pos, handleMouseMove] = usePos();

  return (
    <div
      className="mouseMove__container__div"
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: background }}
    >
      <div className={shape} style={{ top: pos.y, left: pos.x }}></div>
    </div>
  );
};

export default MouseEventDiv;
