import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import Button from "../Button/Button";
import Filter from "../Filter/Filter";
import Modal from "react-modal";
import AddTicketForm from "../Form/AddTicketForm/AddTicketForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

Modal.setAppElement("#root");

const TicketsListHeader = ({ handleFilterByPriority, addNewTicket }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="ticketsList__header">
      <h1>All Tickets</h1>
      <div className="ticketsList__header__actions">
        <div className="ticketsList__header__actions--1">
          <FaSortAmountUp className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Sort</span>
        </div>
        <div
          className="ticketsList__header__actions--2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter className="ticketsList__header__actions__icon" />
          <span className="ticketsList__header__actions__name">Filter</span>
        </div>
        <button className="ticketsList__header__actions--3" onClick={openModal}>
          Add Ticket
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddTicketForm addNewTicket={addNewTicket} />
        </Modal>
      </div>
      {showFilter && <Filter handleFilterByPriority={handleFilterByPriority} />}
    </div>
  );
};

export default TicketsListHeader;
