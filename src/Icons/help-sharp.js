import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgHelpSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316"
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={40}
      />
      <Rect x={220} y={368} width={56} height={56} rx={3.5} ry={3.5} />
    </Svg>
  );
}

export default SvgHelpSharp;
