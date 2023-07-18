import React, { useContext, useState } from "react";
import CustomerName from "./CustomerName/CustomerName";
import TicketDate from "./TicketDate";
import TicketDetails from "./TicketDetails";
import "../styles/ticketsList.scss";
import Button from "../Button/Button";
import TicketsListHeader from "./TicketsListHeader";
import { AiFillDelete } from "react-icons/ai";
import { SearchKeyContext } from "../Dashboard/Dashboard";
import { TicketsContext } from "../Dashboard/Dashboard";
import axios from "../Axios/axios";
import NavBar from "../Header/NavBar";

const TicketsList = () => {
  const [tickets, setTickets] = useContext(TicketsContext);
  const searchKey = useContext(SearchKeyContext);
  const [filterByPriority, setFilterByPriority] = useState("all");
  const handleFilterByPriority = (e) => {
    setFilterByPriority(e.target.value);
  };
  const deleteTicket = async (id) => {
    try {
      await axios.delete(`/tickets/${id}`);
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <NavBar heading="Tickets" />
      <div className="usersList">
        <TicketsListHeader handleFilterByPriority={handleFilterByPriority} />
        <table className="ticketsTable">
          <thead className="ticketsTable__heading">
            <tr className="ticketsTable__heading__row">
              <th className="ticketsTable__heading-1">Ticket details</th>
              <th className="ticketsTable__heading-2">Customer name</th>
              <th className="ticketsTable__heading-3">Date</th>
              <th className="ticketsTable__heading-4">Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="ticketsTable__body">
            {tickets
              ?.filter((ticket) => {
                if (filterByPriority === "all") {
                  return true;
                } else {
                  return ticket.priority === filterByPriority;
                }
              })
              ?.filter((ticket) =>
                ticket.status
                  .toLocaleLowerCase()
                  .includes(searchKey.toLocaleLowerCase())
              )
              ?.map((ticket) => (
                <TicketsRow
                  ticket={ticket}
                  key={ticket.id}
                  deleteTicket={deleteTicket}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketsList;

const TicketsRow = ({ ticket, deleteTicket }) => {
  return (
    <tr className="ticketsTable__body__row">
      <td>
        <TicketDetails
          message={ticket.status}
          time={ticket.days}
          img={ticket.imgSrc}
          id={ticket.id}
        />
      </td>
      <td>
        <CustomerName name={ticket.customerName} date={ticket.date} />
      </td>
      <td>
        <TicketDate
          date={ticket.date1}
          time={ticket.time}
          convention={ticket.convention}
        />
      </td>
      <td>
        <Button priority={ticket.priority} text={ticket.priority} />
      </td>
      <td>
        <AiFillDelete
          className="ticketsTable__body__row__deleteBtn"
          onClick={() => deleteTicket(ticket.id)}
        />
      </td>
    </tr>
  );
};
