import React from "react";

const ProfileModalHeader = ({ profileImage }) => {
  return (
    <div className="profile__modal__header">
      <img
        src={profileImage}
        alt="My Profile Picture"
        className="profile__modal__header__image"
      />
    </div>
  );
};

export default ProfileModalHeader;
