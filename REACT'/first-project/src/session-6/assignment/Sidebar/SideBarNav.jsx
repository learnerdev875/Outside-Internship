import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import SideBarLink from "./SideBarLink";
const SideBarNav = () => {
  return (
    <div className="sidebar__nav">
      <SideBarLink icon={<AiOutlinePieChart />} text="Overview" />
      <SideBarLink icon={<IoTicketSharp />} text="Tickets" />
      <SideBarLink icon={<AiOutlineBulb />} text="Ideas" />
      <SideBarLink icon={<IoMdContacts />} text="Contacts" />
      <SideBarLink icon={<IoPerson />} text="Agents" />
      <SideBarLink icon={<RiArticleLine />} text="Articles" />
    </div>
  );
};

export default SideBarNav;
