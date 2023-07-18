import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../../final-assignment/assignment/Button/Button";
import { TicketsContext } from "../../../final-assignment/assignment/Dashboard/Dashboard";
import { MdOutlineArrowBack } from "react-icons/md";
import "./SingleTicket.scss";

const SingleTicket = () => {
  const { ticketId } = useParams();
  const [tickets, setTickets] = useContext(TicketsContext);
  const ticket = tickets.find((ticket) => ticket.id === parseInt(ticketId));
  const { imgSrc, customerName, status, priority, date1, time, convention } =
    ticket;
  return (
    <div className="singleticket">
      <div className="singleticket__heading">
        <img
          src={imgSrc}
          alt={`${customerName} image`}
          className="singleticket__heading__image"
        />
        <h1 className="singleticket__heading__name">{customerName}</h1>
      </div>
      <div className="singleticket__description">
        <h2 className="singleticket__description__title">{status}</h2>
        <Button priority={priority} text={priority} />
        <p className="singleticket__description__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed quia
          labore debitis amet voluptatem maxime excepturi architecto commodi
          modi quibusdam, facilis sit, fugit facere sapiente alias, molestiae
          non eos.
        </p>
        <p className="singleticket__description__timestamp">
          Added on {date1} at {time} {convention}
        </p>
        <Link to="/dashboard/tickets" className="backBtn">
          <MdOutlineArrowBack /> back to tickets
        </Link>
      </div>
    </div>
  );
};

export default SingleTicket;
