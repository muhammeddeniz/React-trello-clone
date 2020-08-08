import React from "react";

import "./textarea.scss";

type Props = JSX.IntrinsicElements["textarea"] & {};

const Textarea: React.FC<Props> = ({ ...props }) => {
  return <textarea className="Textarea" name="de" id=""></textarea>;
};

export default Textarea;
