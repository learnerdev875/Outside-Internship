import React, { useContext } from "react";
import CustomerName from "./CustomerName/CustomerName";
import TicketDate from "./TicketDate";
import TicketDetails from "./TicketDetails";
import "../styles/ticketsList.scss";
import Button from "../Button/Button";
import TicketsListHeader from "./TicketsListHeader";
import { AiFillDelete } from "react-icons/ai";
import { SearchKeyContext } from "../../../App";

const TicketsList = ({
  users,
  handleDeleteTicket,
  filterByPriority,
  handleFilterByPriority,
}) => {
  const searchKey = useContext(SearchKeyContext);
  return (
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
          {users
            .filter((user) => {
              if (filterByPriority === "all") {
                return true;
              } else {
                return user.priority === filterByPriority;
              }
            })
            .filter((user) =>
              user.status
                .toLocaleLowerCase()
                .includes(searchKey.toLocaleLowerCase())
            )
            .map((user) => (
              <TicketsRow
                user={user}
                key={user.id}
                handleDeleteTicket={handleDeleteTicket}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;

const TicketsRow = ({ user, handleDeleteTicket }) => {
  return (
    <tr className="ticketsTable__body__row">
      <td>
        <TicketDetails
          message={user.status}
          time={user.days}
          img={user.imgSrc}
        />
      </td>
      <td>
        <CustomerName name={user.customerName} date={user.date} />
      </td>
      <td>
        <TicketDate
          date={user.date1}
          time={user.time}
          convention={user.convention}
        />
      </td>
      <td>
        <Button priority={user.priority} />
      </td>
      <td>
        <AiFillDelete
          className="ticketsTable__body__row__deleteBtn"
          onClick={() => handleDeleteTicket(user.id)}
        />
      </td>
    </tr>
  );
};
