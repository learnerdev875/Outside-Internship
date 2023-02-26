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
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/e0c5/3eef/2ef8b64f13159309a272c7dc0e296197?Expires=1678060800&Signature=XFK6~XnLDVUWD1P1-CcnXxCymuBW9gNHjE~8yHLfwCJpIS6BCqYbKX9TY6Lvc8GkiJH8vBvlT50bnSOUQAlD-f21qhR7w4x4m4fGarDLSjrZqPtl7SJEMgIjY4ti-3e3TYAKAJek~7lymsDd75bck19rfV98Lpb2wxVqNiQQlQBdFO0k1jWOxPXYNPTo9OFojmkdnyCHgfvmxf2X1lDpaFR-i9~7KJ5hghkBZMD4IrZrghioMHaqf6tTJ0L6S3IjLsMRnVw~HUtAZ8HuGWVvszxOUistmprO~akj0vJRUG~vXuUs5lNnqr-IplQBLbL5Pd-kGXe24meYXHcCruoviA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
