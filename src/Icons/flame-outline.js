import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlameOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 01-288 0z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgFlameOutline;

