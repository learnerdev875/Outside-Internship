import React from "react";
import "./FormButton.scss";

const FormButton = ({ text }) => {
  return (
    <>
      <input type="submit" value={text} />
    </>
  );
};

export default FormButton;
