import * as React from "react";

function SvgCard2(props: any) {
  return (
    <svg width={24} height={21} fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.818 2.625h18.364c1.004 0 1.818.784 1.818 1.75v10.5c0 .966-.814 1.75-1.818 1.75H2.818c-1.004 0-1.818-.784-1.818-1.75v-10.5c0-.966.814-1.75 1.818-1.75zM3 8.75v6.125h18V8.75H3zM3 7h18V4.375H3V7z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14v-1.75h3V14H6zM15 14v-1.75h2V14h-2zM12 14v-1.75h2V14h-2z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCard2;
