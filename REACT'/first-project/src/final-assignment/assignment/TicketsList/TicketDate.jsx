import React from "react";

const TicketDate = ({ date, time, convention }) => {
  return (
    <div className="ticket-date">
      <p>{date}</p>
      <p>{convention === "pm" ? time + " pm" : time + " am"}</p>
    </div>
  );
};

export default TicketDate;
