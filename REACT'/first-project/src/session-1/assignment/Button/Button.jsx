import React from "react";

const Button = ({ priority }) => {
  return (
    <a
      href="#"
      style={{
        background:
          priority === "high"
            ? "#F12B2C"
            : priority === "normal"
            ? "#29CC97"
            : "#FEC400",
      }}
      className="priority-btn"
    >
      {priority}
    </a>
  );
};

export default Button;
