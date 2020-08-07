import React from "react";

import "./profile.scss";

interface IProps {
  url?: string;
}

const Profile: React.FC<IProps> = ({ url }) => {
  return (
    <div className="profile">
      <img src={url} alt="" />
    </div>
  );
};

export default Profile;
