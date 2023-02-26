import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import Filter from "../Filter/Filter";

const TicketsListHeader = ({ handleFilterByPriority }) => {
  const [showFilter, setShowFilter] = React.useState(false);
  return (
    <div className="ticketsList__header">
      <h1>All Tickets</h1>
      <div className="ticketsList__header__actions">
        <div className="ticketsList__header__actions--1">
          <FaSortAmountUp className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Sort</span>
        </div>
        <div
          className="ticketsList__header__actions--2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Filter</span>
        </div>
      </div>
      {showFilter && <Filter handleFilterByPriority={handleFilterByPriority} />}
    </div>
  );
};

export default TicketsListHeader;
