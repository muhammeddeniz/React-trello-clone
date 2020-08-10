import React from "react";
import "./profileCard.scss";

type Props = JSX.IntrinsicElements["div"] & {};

const Card: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="profileCard" {...props}>
      <p>Change Name</p>
      <input type="text" />
    </div>
  );
};

export default Card;
