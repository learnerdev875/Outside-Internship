import React from "react";

const CustomerName = ({ name, date }) => {
  return (
    <div className="ticket-customer">
      <p>{name}</p>
      <p>on {date}</p>
    </div>
  );
};

export default CustomerName;
