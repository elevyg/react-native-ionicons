import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkCircleOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M352 176L217.6 336 160 272"
      />
    </Svg>
  );
}

export default SvgCheckmarkCircleOutline;

