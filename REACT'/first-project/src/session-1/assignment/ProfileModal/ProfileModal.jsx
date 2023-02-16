import React from "react";
import ProfileModalHeader from "./ProfileModalHeader";
import "../ProfileModal/profilemodal.scss";
import ProfileModalBody from "./ProfileModalBody";

const ProfileModal = ({ profileImage }) => {
  return (
    <div className="profile__modal">
      <ProfileModalHeader profileImage={profileImage} />
      <ProfileModalBody />
    </div>
  );
};

export default ProfileModal;
