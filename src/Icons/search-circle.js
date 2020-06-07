import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgSearchCircle(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
      <Circle cx={232} cy={232} r={56} />
    </Svg>
  );
}

export default SvgSearchCircle;

