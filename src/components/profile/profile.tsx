import React from "react";

import "./profile.scss";

interface IProps {
  url?: string;
  white?: boolean;
}

const Profile: React.FC<IProps> = ({ url, white, ...props }) => {
  return (
    <div
      className="profile"
      {...props}
      style={{ background: `${white ? "#fff" : "#111"}` }}
    >
      <img src={url} alt="" />
    </div>
  );
};

export default Profile;
