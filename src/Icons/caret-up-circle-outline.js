import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretUpCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M342.43 273.77l-74.13-89.09a16 16 0 00-24.6 0l-74.13 89.09A16 16 0 00181.86 300h148.28a16 16 0 0012.29-26.23z" /><Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgCaretUpCircleOutline;