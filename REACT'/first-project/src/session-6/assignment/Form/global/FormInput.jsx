import React, { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi";
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
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="form__input">
      <label htmlFor={id}>
        {labelName.toLocaleUpperCase()}{" "}
        {additionalLabel && <span>{additionalLabel}</span>}
      </label>
      {hasIcon && showPassword && (
        <HiEyeOff className="form__input__icon" onClick={toggleShowPassword} />
      )}
      {hasIcon && !showPassword && (
        <HiEye className="form__input__icon" onClick={toggleShowPassword} />
      )}
      {showPassword ? (
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      ) : (
        <input
          type="text"
          name={id}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default FormInput;
