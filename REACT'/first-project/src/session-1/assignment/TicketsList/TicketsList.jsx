import React, { useState } from "react";
import CustomerName from "./CustomerName/CustomerName";
import TicketDate from "./TicketDate";
import TicketDetails from "./TicketDetails";
import "../styles/ticketsList.scss";
import user1 from "../assets/tom-cruise.png";
import user2 from "../assets/matt-damon.png";
import user3 from "../assets/robert-downey.png";
import user4 from "../assets/christian-bale.png";
import user5 from "../assets/henry-cavil.png";
import user6 from "../assets/chris-evans.png";
import user7 from "../assets/sam-smith.png";
import user8 from "../assets/steve-rogers.png";
import Button from "../Button/Button";
import TicketsListHeader from "./TicketsListHeader";
import { AiFillDelete } from "react-icons/ai";

const TicketsList = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      status: "Contact Email not Linked",
      days: 1,
      customerName: "Tom Cruise",
      date: "24.05.2019",
      date1: "May 26, 2019",
      time: "6:30",
      priority: "high",
      convention: "pm",
      imgSrc: user1,
    },
    {
      id: 2,
      status: "Adding Images to Featured Posts",
      days: 1,
      customerName: "Matt Damon",
      date: "24.05.2019",
      date1: "May 26, 2019",
      time: "8:00",
      priority: "low",
      convention: "am",
      imgSrc: user2,
    },
    {
      id: 3,
      status: "When will I be charged this month?",
      days: 1,
      customerName: "Robert Downey",
      date: "24.05.2019",
      date1: "May 26, 2019",
      time: "7:30",
      priority: "high",
      convention: "pm",
      imgSrc: user3,
    },
    {
      id: 4,
      status: "Payment not going through",
      days: 2,
      customerName: "Christian Bale",
      date: "24.05.2019",
      date1: "May 25, 2019",
      time: "5:00",
      priority: "normal",
      convention: "pm",
      imgSrc: user4,
    },
    {
      id: 5,
      status: "Unable to add replies",
      days: 2,
      customerName: "Henry Cavil",
      date: "24.05.2019",
      date1: "May 25, 2019",
      time: "4:00",
      priority: "high",
      convention: "pm",
      imgSrc: user5,
    },
    {
      id: 6,
      status: "Downtime since last week",
      days: 3,
      customerName: "Chris Evans",
      date: "23.05.2019",
      date1: "May 25, 2019",
      time: "2:00",
      priority: "normal",
      convention: "pm",
      imgSrc: user6,
    },
    {
      id: 7,
      status: "Referral Bonus",
      days: 4,
      customerName: "Sam Smith",
      date: "22.05.2019",
      date1: "May 25, 2019",
      time: "11:30",
      priority: "low",
      convention: "am",
      imgSrc: user7,
    },
    {
      id: 8,
      status: "How do I change my password?",
      days: 6,
      customerName: "Steve Rogers",
      date: "21.05.2019",
      date1: "May 24, 2019",
      time: "1:00",
      priority: "normal",
      convention: "pm",
      imgSrc: user8,
    },
  ]);
  const handleDeleteTicket = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div className="usersList">
      <TicketsListHeader />
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
          {users.map((user) => (
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
