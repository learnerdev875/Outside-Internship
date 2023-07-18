import React from "react";

const NotificationDetails = (props) => {
  const { name, imgSrc, action, time } = props.notification;
  return (
    <div className="notification__body__detail">
      <img
        src={imgSrc}
        alt="Profile Picture"
        className="notification__body__detail__image"
      />
      <div className="notification__body__detail__right">
        <p className="notification__body__detail__action">
          <b>{name}</b> {action === "follow" && " followed you"}
          {action === "comment" && " commented on your post"}{" "}
          {action === "like" && " liked your post"}
        </p>
        <p className="notification__body__detail__time">
          {time}
          {time > 1 ? ` hours ago` : ` hour ago`}
        </p>
      </div>
    </div>
  );
};

export default NotificationDetails;
