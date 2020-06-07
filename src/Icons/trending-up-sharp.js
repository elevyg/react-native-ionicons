import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrendingUpSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M352 144h112v112"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M48 368l144-144 96 96 160-160"
      />
    </Svg>
  );
}

export default SvgTrendingUpSharp;

