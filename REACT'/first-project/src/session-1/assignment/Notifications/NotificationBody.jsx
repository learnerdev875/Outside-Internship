import React from "react";
import user1 from "../assets/tom-cruise.png";
import user2 from "../assets/matt-damon.png";
import user3 from "../assets/robert-downey.png";
import user4 from "../assets/christian-bale.png";
import NotificationDetails from "./NotificationDetails";

const notifications = [
  {
    id: 1,
    imgSrc: user1,
    name: "Tom Cruise",
    action: "like",
    time: 1,
  },
  {
    id: 2,
    imgSrc: user2,
    name: "Matt Damon",
    action: "like",
    time: 16,
  },
  {
    id: 3,
    imgSrc: user3,
    name: "Robert Downey",
    action: "follow",
    time: 18,
  },
  {
    id: 4,
    imgSrc: user4,
    name: "Christian Bale",
    action: "comment",
    time: 6,
  },
];
const NotificationBody = () => {
  return (
    <div className="notification__body">
      {notifications.map((notification) => {
        return (
          <NotificationDetails
            notification={notification}
            key={notification.id}
          />
        );
      })}
    </div>
  );
};

export default NotificationBody;
