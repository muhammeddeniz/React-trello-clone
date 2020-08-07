import React from "react";

import "./list.scss";
import { ListHead } from "../index";

interface IProps {
  ListName?: string;
  cards?: Array<any>;
}

const List: React.FC<any> = () => {
  return (
    <div className="list">
      <ListHead title="Birinci Liste"></ListHead>
    </div>
  );
};

export default List;
