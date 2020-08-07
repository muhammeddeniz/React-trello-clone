import React from "react";
import cx from "classnames";
import "./card.scss";

type Props = JSX.IntrinsicElements["div"] & {
  red?: boolean;
  blue?: boolean;
  yellow?: boolean;
  green?: boolean;
};

const Card: React.FC<Props> = ({ red, blue, yellow, green, className }) => {
  const StyleCardColor = cx(
    "card-color",
    {
      "card-color-red": red,
      "card-color-blue": blue,
      "card-color-yellow": yellow,
      "card-color-green": green,
    },
    className
  );

  return (
    <div className="card">
      <div className={StyleCardColor}></div>
      <p className="card-text">Kart 1.1</p>
    </div>
  );
};

export default Card;
