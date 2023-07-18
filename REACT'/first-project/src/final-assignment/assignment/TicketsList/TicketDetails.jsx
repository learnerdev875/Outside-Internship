import React from "react";
import { Link } from "react-router-dom";

const TicketDetails = ({ message, time, img, id }) => {
  return (
    <div className="ticket-details">
      <Link to={`/dashboard/tickets/${id}`}>
        <img src={img} alt="profile image" className="ticket-profile" />
      </Link>
      <div className="ticket-status">
        <p>{message}</p>
        <p>Updated {time > 1 ? time + " days ago" : time + " day ago"}</p>
      </div>
    </div>
  );
};

export default TicketDetails;
