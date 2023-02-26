import React, { useState } from "react";
import FormHeader from "../global/FormHeader";
import Logo from "../../../../assets/logo.svg";
import "./AddTicketForm.scss";
import FormInput from "../global/FormInput";
import FormButton from "../global/FormButton";
import useFetchTickets from "../../hooks/useFetchTickets";
import dayjs from "dayjs";

const AddTicketForm = ({ addNewTicket }) => {
  const [newTicket, setNewTicket] = useState({
    customerName: "",
    status: "",
    date: "",
    priority: "",
    days: 1,
    date1: "",
    time: "",
    convention: "",
    imgSrc: "/public/sam-smith.png",
  });

  function handleInputChange(e) {
    setNewTicket({
      ...newTicket,
      [e.target.name]: e.target.value,
      date: dayjs().format("DD.MM.YYYY"),
      date1: dayjs().format("MMMM DD, YYYY"),
      time: dayjs().format("h:mm"),
      convention: dayjs().format("a"),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewTicket(newTicket);
    setNewTicket({
      customerName: "",
      status: "",
      date: "",
      priority: "high",
      days: 1,
      date1: "",
      time: "",
      convention: "",
      imgSrc: "/public/sam-smith.png",
    });
  }
  return (
    <div className="addTicketForm">
      <div className="addTicketForm__header">
        <img src={Logo} alt="dashboard logo" />
        <h1>Add Ticket</h1>
      </div>
      <form className="addTicketForm__container" onSubmit={handleSubmit}>
        <div className="addTicketForm__container__input">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={newTicket.customerName}
            onChange={handleInputChange}
            placeholder="Customer Name"
          />
        </div>
        <div className="addTicketForm__container__input">
          <label htmlFor="status">Issue</label>
          <input
            type="text"
            id="status"
            name="status"
            value={newTicket.status}
            onChange={handleInputChange}
            placeholder="Issue"
          />
        </div>
        <div className="addTicketForm__container__select">
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" onChange={handleInputChange}>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <FormButton text="Add" />
      </form>
    </div>
  );
};

export default AddTicketForm;
