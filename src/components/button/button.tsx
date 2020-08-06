import cx from "classnames";
import React from "react";

import "./button.scss";

type IProps = JSX.IntrinsicElements["button"] & {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  info?: boolean;
  dark?: boolean;
  light?: boolean;
};

const Button: React.FC<IProps> = ({
  children,
  className,
  primary,
  success,
  warning,
  danger,
  info,
  dark,
  light,
  ...rest
}) => {
  const btnClass = cx(
    "btn",
    {
      "btn-primary": primary,
      "btn-success": success,
      "btn-warning": warning,
      "btn-danger": danger,
      "btn-info": info,
      "btn-dark": dark,
      "btn-light": light,
    },
    className
  );

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
