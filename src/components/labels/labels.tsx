import React, { useEffect, useState } from "react";
import "./labels.scss";

import { Button } from "../index";

interface IProps {
  data?: any;
  title?: string;
  store?: any;
  inList?: string;
}

const Labels: React.FC<IProps> = ({ store, data, title, inList }) => {
  const [myData, setMyData] = useState({
    id: "",
    content: "",
    comment: [""],
    labels: ["r"],
  });

  const [labelData, setLabelData] = useState(false);

  useEffect(() => {
    if (data) {
      let temp = data.find((item: any) => item.content == title);
      setMyData(temp);
    }
  });

  return (
    <div className="labels">
      {myData?.labels?.map((item: any, key: any) => {
        return item === "r" ? (
          <Button
            onClick={() => {
              store.DeleteLabel(title, inList, "r");
              setLabelData(!labelData);
            }}
            danger
          >
            Danger
          </Button>
        ) : item === "b" ? (
          <Button
            onClick={() => {
              store.DeleteLabel(title, inList, "b");
              setLabelData(!labelData);
            }}
            info
          >
            Info
          </Button>
        ) : item === "y" ? (
          <Button
            onClick={() => {
              store.DeleteLabel(title, inList, "y");
              setLabelData(!labelData);
            }}
            warning
          >
            WArning
          </Button>
        ) : item === "g" ? (
          <Button
            onClick={() => {
              store.DeleteLabel(title, inList, "g");
              setLabelData(!labelData);
            }}
            success
          >
            Success
          </Button>
        ) : null;
      })}
    </div>
  );
};

export default Labels;
