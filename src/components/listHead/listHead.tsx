import React from "react";

import "./listHead.scss";
import { More } from "../icons";

interface IProps {
  title?: string;
}

const ListHead: React.FC<IProps> = ({ title }) => {
  return (
    <div className="listHead">
      <p className="listHead-title">{title}</p>
      <More />
    </div>
  );
};

export default ListHead;
