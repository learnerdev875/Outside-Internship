import React from "react";

const TicketDetails = ({ message, time, img }) => {
  return (
    <div className="ticket-details">
      <img src={img} alt="profile image" className="ticket-profile" />
      <div className="ticket-status">
        <p>{message}</p>
        <p>Updated {time > 1 ? time + " days ago" : time + " day ago"}</p>
      </div>
    </div>
  );
};

export default TicketDetails;
