import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodeDownload(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={42}
        d="M160 368L32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03"
      />
    </Svg>
  );
}

export default SvgCodeDownload;
