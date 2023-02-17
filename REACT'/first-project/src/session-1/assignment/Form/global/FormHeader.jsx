import React from "react";
import Logo from "../../assets/logo.svg";
import "./FormHeader.scss";

const FormHeader = ({ action }) => {
  return (
    <div className="formHeader">
      <img src={Logo} alt="Dashboard Logo" className="formHeader__logo" />
      <p className="appName">Dashboard Kit</p>
      <h1
        className="formHeader__title"
        style={{ marginBottom: action === "login" ? "12px" : "20px" }}
      >
        {action === "login" ? "Log In" : "Sign up"} to Dashboard Kit
      </h1>
      {action === "login" && (
        <p className="formHeader__subtitle">
          Enter your email and password below
        </p>
      )}
    </div>
  );
};

export default FormHeader;
