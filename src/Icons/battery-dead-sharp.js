import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryDeadSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} d="M32 144h400v224H32zM480 218.67v74.66" /></Svg>;
}

export default SvgBatteryDeadSharp;