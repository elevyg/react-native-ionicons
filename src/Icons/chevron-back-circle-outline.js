import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronBackCircleOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
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
        d="M296 352l-96-96 96-96"
      />
    </Svg>
  );
}

export default SvgChevronBackCircleOutline;

