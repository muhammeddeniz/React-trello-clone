import cx from "classnames";
import React from "react";

import "./button.scss";

type IProps = JSX.IntrinsicElements["button"] & {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  dark?: boolean;
};

const Button: React.FC<IProps> = ({
  children,
  className,
  primary,
  secondary,
  outline,
  dark,
}) => {
  const btnClass = cx(
    "btn",
    {
      "btn-primary": primary,
      "btn-secondary": secondary,
      "btn-outline": outline,
      "btn-dark": dark,
    },
    className
  );

  return (
    <div>
      <button className={btnClass}>{children}</button>
    </div>
  );
};

export default Button;
