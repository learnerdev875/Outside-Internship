import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import ProfileImage from "../assets/profile.png";
import "../styles/navbar.scss";
import Modal from "react-modal";
import Notification from "../Notifications/Notification";
import ProfileModal from "../ProfileModal/ProfileModal";

const customStyles = {
  content: {
    top: "10%",
    left: "62%",
    width: "300px",
    padding: "0",
    margin: "0",
    height: "fit-content",
  },
};
const profileStyles = {
  content: {
    top: "10%",
    left: "82%",
    width: "250px",
    height: "fit-content",
    padding: "0",
  },
};

Modal.setAppElement("#root");

const NavBar = ({ searchTicket, handleSearchTicket }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [notificationModalIsOpen, setNotificationIsOpen] = useState(false);
  const [profileModalIsOpen, setProfileIsOpen] = useState(false);

  function openNotificationModal() {
    setNotificationIsOpen(true);
  }
  function openProfileModal() {
    setProfileIsOpen(true);
  }
  function afterOpenModal() {}

  function closeProfileModal() {
    setProfileIsOpen(false);
  }
  function closeNotificationModal() {
    setNotificationIsOpen(false);
  }
  return (
    <nav className="navbar flex-align-center">
      <h1>Tickets</h1>
      <div className="navbar__links flex-align-center">
        <div className="navbar__links__icons">
          <div className="navbar__search">
            <input
              type="text"
              style={{ display: showSearch ? "block" : "none" }}
              value={searchTicket}
              onChange={handleSearchTicket}
            />
            <button
              className="navbar__button"
              onClick={() => setShowSearch(!showSearch)}
            >
              <BsSearch />
            </button>
          </div>
          <button
            className="navbar__button navbar__button--notification"
            onClick={openNotificationModal}
          >
            <BsBellFill />
          </button>
          <Modal
            isOpen={notificationModalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeNotificationModal}
            style={customStyles}
            contentLabel="Notification Modal"
          >
            <Notification />
          </Modal>
        </div>
        <div className="navbar__links__avatar flex-align-center">
          <p>Jones Ferdinand</p>
          <div
            className="navbar__links__avatar--image"
            onClick={openProfileModal}
          >
            <img src={ProfileImage} alt="Jones Ferdinand Image" />
          </div>
          <Modal
            isOpen={profileModalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeProfileModal}
            style={profileStyles}
            contentLabel="Profile Modal"
          >
            <ProfileModal profileImage={ProfileImage} />
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
