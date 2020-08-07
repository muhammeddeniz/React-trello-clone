import * as React from "react";

function SvgCard(props) {
  return (
    <svg width={16} height={16} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1h6c1.152 0 2 .848 2 2v6c0 1.152-.848 2-2 2h-2v2c0 1.152-.848 2-2 2H3c-1.152 0-2-.848-2-2V7c0-1.152.848-2 2-2h2V3c0-1.152.848-2 2-2zM5 7H3v6h6v-2H7c-1.152 0-2-.848-2-2V7zm2-4v6h6V3H7z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCard;
