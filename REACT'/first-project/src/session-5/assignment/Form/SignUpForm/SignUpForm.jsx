import React, { useState } from "react";
import FormFooter from "../global/FormFooter";
import FormHeader from "../global/FormHeader";
import "../global/Form.scss";
import FormInput from "../global/FormInput";
import FormButton from "../global/FormButton";

const SignUpForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //function to handle form input
  const handleInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //function to handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(
      ` Full Name: ${user.fullName} Email: ${user.email} Password: ${user.password} Confirm Password: ${user.confirmPassword}`
    );
  };

  return (
    <div className="signupForm form">
      <FormHeader action="signup" />
      <form className="form__container" onSubmit={handleSubmitForm}>
        <FormInput
          type="text"
          id="fullName"
          labelName="fullname"
          placeholder="Fullname"
          hasIcon={false}
          additionalLabel={false}
          value={user.fullName}
          handleInputChange={handleInputChange}
        />
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
          additionalLabel={false}
          value={user.password}
          handleInputChange={handleInputChange}
        />
        <FormInput
          type="password"
          id="confirmPassword"
          labelName="confirm password"
          placeholder="Confirm Password"
          hasIcon={true}
          additionalLabel={false}
          value={user.confirmPassword}
          handleInputChange={handleInputChange}
        />
        <FormButton />
      </form>
      <FormFooter />
    </div>
  );
};

export default SignUpForm;
