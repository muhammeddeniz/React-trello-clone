import React from "react";
import Link from "next/link";
import "./header.scss";

import { LinkButton, Profile } from "../index";

interface IProps {
  name?: string;
  store?: any;
}

const Header: React.FC<IProps> = ({ store, name }) => {
  return (
    <div className="header">
      <div className="header-links">
        <Link href="index">
          <LinkButton>TEST BOARD</LinkButton>
        </Link>
      </div>

      <div className="header-avatar">
        <Profile name={name} white store={store} admin></Profile>
      </div>
    </div>
  );
};

export default Header;
