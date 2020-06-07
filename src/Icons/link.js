import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLink(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M200.66 352H144a96 96 0 010-192h55.41M312.59 160H368a96 96 0 010 192h-56.66M169.07 256h175.86"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
      />
    </Svg>
  );
}

export default SvgLink;

