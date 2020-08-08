import React, { Children } from "react";

import "./list.scss";
import { ListHead, ListFooter, Card } from "../index";

type IProps = JSX.IntrinsicElements["div"] & {
  ListName?: string;
  cards?: Array<any>;
};

const List: React.FC<IProps> = ({ ListName, children }) => {
  return (
    <div className="list">
      <ListHead>{ListName}</ListHead>
      {Children}
      <ListFooter />
    </div>
  );
};

export default List;
