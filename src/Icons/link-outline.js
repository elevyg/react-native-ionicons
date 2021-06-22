import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLinkOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={36} /></Svg>;
}

export default SvgLinkOutline;