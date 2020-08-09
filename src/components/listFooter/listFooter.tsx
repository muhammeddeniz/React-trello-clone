import React from "react";

import "./listFooter.scss";
import { Plus, Card } from "../icons";

const ListFooter: React.FC<any> = ({ ...props }) => {
  return (
    <div className="ListFooter" {...props}>
      <div className="ListFooter-left">
        <Plus />
        <p>Add another card</p>
      </div>
      <Card />
    </div>
  );
};

export default ListFooter;
