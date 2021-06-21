import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgWatchOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={112} y={112} width={288} height={288} rx={64} ry={64} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path d="M176 112V40a8 8 0 018-8h144a8 8 0 018 8v72M336 400v72a8 8 0 01-8 8H184a8 8 0 01-8-8v-72" fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgWatchOutline;