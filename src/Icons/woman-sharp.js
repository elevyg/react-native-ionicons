import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgWomanSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={255.75} cy={56} r={56} />
      <Path d="M310.28 191.4h.05l7.66-2.3 36.79 122.6 46-13.8-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12-4.71-15.74-.9-3H362l-2.51-8.45a44.84 44.84 0 00-43-32.08H195.24a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-.9 3-4.71 15.74-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16 46 13.8 36.76-122.6 7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51z" />
    </Svg>
  );
}

export default SvgWomanSharp;

