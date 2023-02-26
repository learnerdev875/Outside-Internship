import React from "react";
import "./NoMatch.scss";
import Robot from "../../../assets/robot-error-404-new.jpg";

const NoMatch = () => {
  return (
    <div className="nomatch__container">
      <div className="nomatch__container--left">
        <h1>Ooops!</h1>
        <h2>404 - Page not found</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          accusamus aut voluptates aspernatur minima quis dicta quisquam, natus
          eaque ad facere id quibusdam veniam cupiditate voluptatem. Quisquam
          blanditiis iusto illum!
        </p>
        <button>Go to Homepage</button>
      </div>
      <div className="nomatch__container--right">
        <img src={Robot} alt="404 error robot" />
      </div>
    </div>
  );
};

export default NoMatch;
