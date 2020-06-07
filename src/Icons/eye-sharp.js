import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgEyeSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={64} />
      <Path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
    </Svg>
  );
}

export default SvgEyeSharp;

