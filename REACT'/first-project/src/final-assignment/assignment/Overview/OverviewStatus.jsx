import React from "react";

const OverviewStatus = ({ title, number }) => {
  return (
    <div className="overview__container__status">
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  );
};

export default OverviewStatus;
