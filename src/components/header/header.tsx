import React from "react";
import Link from "next/link";
import "./header.scss";

import { LinkButton, Profile } from "../index";

const Header = () => {
  return (
    <div className="header">
      <div className="header-links">
        <LinkButton>TEST BOARD</LinkButton>
      </div>

      <div className="header-avatar">
        <Link href="index">
          <Profile white></Profile>
        </Link>
      </div>
    </div>
  );
};

export default Header;
