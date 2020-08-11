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

  let red = myData?.labels?.find((item: any) => item == "r");
  let blue = myData?.labels?.find((item: any) => item == "b");
  let yellow = myData?.labels?.find((item: any) => item == "y");
  let green = myData?.labels?.find((item: any) => item == "g");

  return (
    <div className="labels">
      {red ? <Button danger>Danger</Button> : null}
      {blue ? <Button info>İnfo</Button> : null}
      {yellow ? <Button warning>Warning</Button> : null}
      {green ? <Button success>Success</Button> : null}
    </div>
  );
};

export default Labels;
