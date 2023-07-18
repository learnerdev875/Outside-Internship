import React from "react";
import Logo from "../../../assets/logo.svg";
import SideBarNav from "./SideBarNav";
import { FiSettings } from "react-icons/fi";
import { IoRibbonOutline } from "react-icons/io5";
import "../styles/sidebar.css";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <img src={Logo} style={{ width: "32", height: "32" }} />
        <p>Dashboard Kit</p>
      </div>
      <SideBarNav />
      <div className="sidebar__additional">
        <SideBarLink
          icon={<FiSettings />}
          text="Settings"
          path="/dashboard/settings"
        />
        <SideBarLink
          icon={<IoRibbonOutline />}
          text="Subscription"
          path="/dashboard/subscription"
        />
      </div>
    </div>
  );
};

export default SideBar;
