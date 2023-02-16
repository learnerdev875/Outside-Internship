import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import Link from "./Link";
const SideBarNav = () => {
  return (
    <div className="sidebar__nav">
      <Link icon={<AiOutlinePieChart />} text="Overview" />
      <Link icon={<IoTicketSharp />} text="Tickets" />
      <Link icon={<AiOutlineBulb />} text="Ideas" />
      <Link icon={<IoMdContacts />} text="Contacts" />
      <Link icon={<IoPerson />} text="Agents" />
      <Link icon={<RiArticleLine />} text="Articles" />
    </div>
  );
};

export default SideBarNav;
