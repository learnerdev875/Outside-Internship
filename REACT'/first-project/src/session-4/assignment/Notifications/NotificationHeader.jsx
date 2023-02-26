import React from "react";
import { FiSettings } from "react-icons/fi";

const NotificationHeader = () => {
  return (
    <div className="notification__header">
      <p className="notification__header__text">Notifications</p>
      <FiSettings />
    </div>
  );
};

export default NotificationHeader;
