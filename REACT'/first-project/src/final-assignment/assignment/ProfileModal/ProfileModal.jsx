import React, { useContext } from "react";
import "./profilemodal.scss";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../../App";

const ProfileModal = () => {
  const navigate = useNavigate();
  const [loggedInInfo, setLoggedInInfo] = useContext(LoggedInContext);

  function logout() {
    setLoggedInInfo({
      status: false,
      username: "",
    });
    navigate("/");
  }
  return (
    <div className="profile__modal">
      <div className="profile__modal__activity">
        <CgProfile />
        <span>Profile</span>
      </div>
      <div className="profile__modal__activity">
        <IoTicketSharp />
        <span>Tickets</span>
      </div>
      <div className="profile__modal__activity">
        <FiSettings />
        <span>Settings</span>
      </div>
      <div className="profile__modal__activity" onClick={logout}>
        <MdLogout />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default ProfileModal;
