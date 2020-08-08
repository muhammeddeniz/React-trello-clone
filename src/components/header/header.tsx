import React from "react";
import "./header.scss";

import { LinkButton, Profile } from "../index";

const Header = () => {
  return (
    <div className="header">
      <div className="header-links">
        <LinkButton>TEST BOARD</LinkButton>
      </div>

      <div className="header-avatar">
        <Profile white></Profile>
      </div>
    </div>
  );
};

export default Header;
