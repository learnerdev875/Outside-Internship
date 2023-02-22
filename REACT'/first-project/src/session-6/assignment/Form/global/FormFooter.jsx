import React from "react";
import "./FormFooter.scss";
import { Link } from "react-router-dom";

const FormFooter = ({ type }) => {
  return (
    <div className="formFooter">
      {type === "login" && (
        <p>
          Don't have an account?{" "}
          <Link className="formFooter__link" to="/signup">
            Sign up
          </Link>
        </p>
      )}
      {type === "signup" && (
        <p>
          Already have an account?{" "}
          <Link className="formFooter__link" to="/login">
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export default FormFooter;
