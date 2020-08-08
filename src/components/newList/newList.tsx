import React from "react";

import "./newList.scss";

import { WhitePlus } from "../icons";

const NewList: React.FC<any> = () => {
  return (
    <div className="newList">
      <WhitePlus color="white" />
      <p className="newList-text">Add another list</p>
    </div>
  );
};

export default NewList;
