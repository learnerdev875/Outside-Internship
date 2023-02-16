import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

const TicketsListHeader = () => {
  return (
    <div className="ticketsList__header">
      <h1>All Tickets</h1>
      <div className="ticketsList__header__actions">
        <div className="ticketsList__header__actions--1">
          <FaSortAmountUp className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Sort</span>
        </div>
        <div className="ticketsList__header__actions--2">
          <FaFilter className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Filter</span>
        </div>
      </div>
    </div>
  );
};

export default TicketsListHeader;
