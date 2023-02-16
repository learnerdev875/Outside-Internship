import React from "react";
import { RxDashboard } from "react-icons/rx";
import SideBarNav from "./SideBarNav";
import Link from "./Link";
import { FiSettings } from "react-icons/fi";
import { IoRibbonOutline } from "react-icons/io5";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <RxDashboard />
        <p>Dashboard Kit</p>
      </div>
      <SideBarNav />
      <div className="sidebar__additional">
        <Link icon={<FiSettings />} text="Settings" />
        <Link icon={<IoRibbonOutline />} text="Subscription" />
      </div>
    </div>
  );
};

export default SideBar;
