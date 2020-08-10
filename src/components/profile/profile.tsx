import React from "react";

import "./profile.scss";

interface IProps {
  url?: string;
  white?: boolean;
  name?: string;
}

const Profile: React.FC<IProps> = ({ url, white, name, ...props }) => {
  return (
    <div
      className="profile"
      {...props}
      style={{ background: `${white ? "#fff" : "#111"}` }}
    >
      <p className="profile-name">{name}</p>
      <img src={url} alt="" />
    </div>
  );
};

export default Profile;
