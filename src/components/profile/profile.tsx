import React from "react";

import "./profile.scss";

interface IProps {
  admin?: boolean;
  url?: string;
  white?: boolean;
  name?: string;
  store?: any;
}

const Profile: React.FC<IProps> = ({
  admin,
  store,
  url,
  white,
  name,
  ...props
}) => {
  return (
    <div
      className="profile"
      {...props}
      style={{ background: `${white ? "#fff" : "#111"}` }}
    >
      {admin && (
        <input
          className="profile-name"
          placeholder={store.name}
          onChange={(e) => store.ChangeName(e.target.value)}
        ></input>
      )}
      <img src={url} alt="" />
    </div>
  );
};

export default Profile;
