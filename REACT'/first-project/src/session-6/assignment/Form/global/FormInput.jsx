import React from "react";
import { HiEyeOff } from "react-icons/hi";
// import { HiEye } from "react-icons/hi";
import "./FormInput.scss";

const FormInput = ({
  type,
  id,
  labelName,
  placeholder,
  hasIcon,
  additionalLabel,
  value,
  handleInputChange,
}) => {
  return (
    <div className="form__input">
      <label htmlFor={id}>
        {labelName.toLocaleUpperCase()}{" "}
        {additionalLabel && <span>{additionalLabel}</span>}
      </label>
      {hasIcon && <HiEyeOff className="form__input__icon" />}
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormInput;
