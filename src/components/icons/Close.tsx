import * as React from "react";

function SvgClose(props: any) {
  return (
    <svg width={16} height={16} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9.414l-4.293 4.293-1.414-1.414L6.586 8 2.293 3.707l1.414-1.414L8 6.586l4.293-4.293 1.414 1.414L9.414 8l4.293 4.293-1.414 1.414L8 9.414z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgClose;
