import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkCircleSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z" />
    </Svg>
  );
}

export default SvgCheckmarkCircleSharp;

