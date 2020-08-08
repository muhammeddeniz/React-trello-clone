import React from "react";

import "./listHead.scss";
import { More } from "../icons";

interface IProps {
  title?: string;
}

const ListHead: React.FC<IProps> = ({ children }) => {
  return (
    <div className="listHead">
      <p className="listHead-title">{children}</p>
      <More />
    </div>
  );
};

export default ListHead;
