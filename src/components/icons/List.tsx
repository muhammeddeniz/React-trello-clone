import * as React from "react";

function SvgList(props: any) {
  return (
    <svg width={17} height={16} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3v2h12V3H3zm0 6V7h12v2H3zm0 4v-2h12v2H3zM.25 3v2h1.5V3H.25zm0 6V7h1.5v2H.25zm0 4v-2h1.5v2H.25z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgList;
