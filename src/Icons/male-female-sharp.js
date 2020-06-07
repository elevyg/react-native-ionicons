import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMaleFemaleSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.23 157.23 0 00-14-64.93l44-44V134h44V16zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z" />
    </Svg>
  );
}

export default SvgMaleFemaleSharp;

