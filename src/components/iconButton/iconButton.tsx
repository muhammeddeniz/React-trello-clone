import React from "react";

import "./iconButton.scss";

import { WhitePlus } from "../icons";

const IconButton: React.FC<any> = ({ ...props }) => {
  return (
    <div className="iconButton" {...props}>
      <WhitePlus />
    </div>
  );
};

export default IconButton;
