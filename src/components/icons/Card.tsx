import * as React from "react";

function SvgCard(props) {
  return (
    <svg width={19} height={16} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0h6c1.152 0 2 .848 2 2v3h2c1.152 0 2 .848 2 2v6c0 1.152-.848 2-2 2h-6c-1.152 0-2-.848-2-2v-3H7c-1.152 0-2-.848-2-2V2c0-1.152.848-2 2-2zm4 10v3h6V7h-2v1c0 1.152-.848 2-2 2h-2zM7 2v6h6V2H7z"
        fill="#000"
      />
      <path d="M9 7a2 2 0 012-2h6v8H9V7z" fill="#5c5757" />
    </svg>
  );
}

export default SvgCard;
