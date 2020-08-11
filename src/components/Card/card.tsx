import React, { useEffect } from "react";
import cx from "classnames";
import "./card.scss";

type Props = JSX.IntrinsicElements["div"] & {
  labels?: Array<string>;
};

const Card: React.FC<Props> = ({
  labels = [],
  className,
  children,
  ...props
}) => {
  let red = labels?.find((item: any) => item == "r");
  let blue = labels?.find((item: any) => item == "b");
  let yellow = labels?.find((item: any) => item == "y");
  let green = labels?.find((item: any) => item == "g");

  return (
    <div className="card" {...props}>
      <div className="card-color">
        {red && <div className="card-color-red"></div>}
        {blue && <div className="card-color-blue"></div>}
        {yellow && <div className="card-color-yellow"></div>}
        {green && <div className="card-color-green"></div>}
      </div>
      <p className="card-text">{children}</p>
    </div>
  );
};

export default Card;
