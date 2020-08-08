import React from "react";

import "./linkButton.scss";

import { Home } from "../icons";

const LinkBUtton: React.FC<any> = ({ children }) => {
  return (
    <button>
      <Home />
      {children}
    </button>
  );
};

export default LinkBUtton;
