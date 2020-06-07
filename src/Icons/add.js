import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdd(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288M400 256H112"
      />
    </Svg>
  );
}

export default SvgAdd;
