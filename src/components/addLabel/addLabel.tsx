import React from "react";
import "./addLabel.scss";

import { Button } from "../index";

const AddLabel: React.FC<any> = ({
  setWarning,
  setInfo,
  setDanger,
  setSuccess,
  setElement,
  ...props
}) => {
  return (
    <div className="addLabel" {...props}>
      <div className="addLabel-centik"></div>
      <div className="addLabel-content">
        <Button onClick={() => setWarning(true)} warning>
          warning
        </Button>
        <Button onClick={() => setInfo(true)} info>
          info
        </Button>
        <Button onClick={() => setSuccess(true)} success>
          success
        </Button>
        <Button onClick={() => setDanger(true)} danger>
          danger
        </Button>
      </div>
    </div>
  );
};

export default AddLabel;
