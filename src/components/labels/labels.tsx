import React, { useEffect, useState } from "react";
import "./labels.scss";

import { Button } from "../index";

interface IProps {
  data?: any;
  title?: string;
}

const Labels: React.FC<IProps> = ({ data, title }) => {
  const [myData, setMyData] = useState({
    id: "",
    content: "",
    comment: [""],
    labels: ["r"],
  });

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
          <Button danger>Danger</Button>
        ) : item === "b" ? (
          <Button info>Info</Button>
        ) : item === "y" ? (
          <Button warning>WArning</Button>
        ) : item === "g" ? (
          <Button success>Success</Button>
        ) : null;
      })}
    </div>
  );
};

export default Labels;
