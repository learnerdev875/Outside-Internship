import React from "react";
import NotificationBody from "./NotificationBody";
import NotificationHeader from "./NotificationHeader";
import "../Notifications/notification.scss";
import NotificationFooter from "./NotificationFooter";

const Notification = () => {
  return (
    <div className="notification">
      <NotificationHeader />
      <NotificationBody />
      <NotificationFooter />
    </div>
  );
};

export default Notification;
