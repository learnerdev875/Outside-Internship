import React from "react";
import "../Filter/filter.scss";

const Filter = ({ handleFilterByPriority }) => {
  return (
    <div className="filter">
      <select
        name="filter__by__priority"
        id="filterByPriority"
        onChange={handleFilterByPriority}
      >
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
      </select>
    </div>
  );
};

export default Filter;
