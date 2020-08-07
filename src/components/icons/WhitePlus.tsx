import * as React from "react";

function SvgWhitePlus(props) {
  return (
    <svg width={16} height={16} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7h5v2H9v5H7V9H2V7h5V2h2v5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgWhitePlus;
