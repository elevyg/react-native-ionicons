import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M272 176v161h-32V176H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V188a12 12 0 00-12-12zM272 92.63l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z" />
    </Svg>
  );
}

export default SvgShareSharp;

