import React, { useState } from "react";
import FormButton from "../global/FormButton";
import FormFooter from "../global/FormFooter";
import FormHeader from "../global/FormHeader";
import "./LoginForm.scss";
import "../global/Form.scss";
import FormInput from "../global/FormInput";
import useFetchUsers from "../../hooks/useFetchUsers";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { validateUsers, loginSuccess } = useFetchUsers();
  //function to handle form input
  const handleInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "rememberMe" ? !prev.rememberMe : e.target.value,
    }));
  };

  //function to handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    validateUsers(user);
  };
  return (
    <>
      {loginSuccess ? (
        <div style={{ color: "#fff" }}>You are successfully Logged In</div>
      ) : (
        <div className="loginForm form">
          <FormHeader action="login" />
          <form className="form__container" onSubmit={handleSubmitForm}>
            <FormInput
              type="email"
              id="email"
              labelName="email"
              placeholder="Email address"
              hasIcon={false}
              additionalLabel={false}
              value={user.email}
              handleInputChange={handleInputChange}
            />
            <FormInput
              type="password"
              id="password"
              labelName="password"
              placeholder="Password"
              hasIcon={true}
              additionalLabel="Forgot password?"
              value={user.password}
              handleInputChange={handleInputChange}
            />
            <div className="form__container__checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                onChange={handleInputChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <FormButton text="Log In" />
          </form>
          <FormFooter type="login" />
        </div>
      )}
    </>
  );
};

export default LoginForm;
