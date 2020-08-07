import * as React from "react";

function SvgMore(props) {
  return (
    <svg width={24} height={24} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 14a2 2 0 110-4 2 2 0 010 4zm7 0a2 2 0 110-4 2 2 0 010 4zm5-2a2 2 0 104 0 2 2 0 00-4 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMore;
