import React from "react";

import "./listFooter.scss";
import { Plus, Card } from "../icons";

const ListFooter: React.FC<any> = () => {
  return (
    <div className="ListFooter">
      <div className="ListFooter-left">
        <Plus></Plus>
        <p>Add another card</p>
      </div>
      <Card></Card>
    </div>
  );
};

export default ListFooter;
