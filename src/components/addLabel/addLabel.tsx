import React from "react";
import "./addLabel.scss";

import { Button } from "../index";

const AddLabel: React.FC<any> = ({ setElement, ...props }) => {
  return (
    <div className="addLabel" {...props}>
      <div className="addLabel-centik"></div>
      <div className="addLabel-content">
        <Button warning>warning</Button>
        <Button info>info</Button>
        <Button success>success</Button>
        <Button danger>danger</Button>
      </div>
    </div>
  );
};

export default AddLabel;
