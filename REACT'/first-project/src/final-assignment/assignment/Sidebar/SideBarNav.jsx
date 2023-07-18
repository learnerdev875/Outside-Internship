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
      <SideBarLink
        icon={<AiOutlinePieChart />}
        text="Overview"
        path="/dashboard/overview"
      />
      <SideBarLink
        icon={<IoTicketSharp />}
        text="Tickets"
        path="/dashboard/tickets"
      />
      <SideBarLink
        icon={<AiOutlineBulb />}
        text="Ideas"
        path="/dashboard/ideas"
      />
      <SideBarLink
        icon={<IoMdContacts />}
        text="Contacts"
        path="/dashboard/contacts"
      />
      <SideBarLink icon={<IoPerson />} text="Agents" path="/dashboard/agents" />
      <SideBarLink
        icon={<RiArticleLine />}
        text="Articles"
        path="/dashboard/articles"
      />
    </div>
  );
};

export default SideBarNav;
