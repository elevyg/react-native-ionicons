import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShapes(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z" />
      <Path d="M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z" />
    </Svg>
  );
}

export default SvgShapes;

