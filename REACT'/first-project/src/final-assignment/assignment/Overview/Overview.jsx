import React from "react";
import "./Overview.scss";
import OverviewStatus from "./OverviewStatus";
import NavBar from "../Header/NavBar";

const Overview = () => {
  return (
    <>
      <NavBar heading="Overview" />
      <div className="overview__container">
        <OverviewStatus title="Unresolved" number={60} />
        <OverviewStatus title="Overdue" number={16} />
        <OverviewStatus title="Open" number={43} />
        <OverviewStatus title="On hold" number={64} />
      </div>
    </>
  );
};

export default Overview;
