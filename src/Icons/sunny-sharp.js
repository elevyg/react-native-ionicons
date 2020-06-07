import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSunnySharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
    </Svg>
  );
}

export default SvgSunnySharp;
