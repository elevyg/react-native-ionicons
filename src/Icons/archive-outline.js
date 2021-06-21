import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgArchiveOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Rect x={48} y={64} width={416} height={80} rx={28} ry={28} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M320 304l-64 64-64-64M256 345.89V224" /></Svg>;
}

export default SvgArchiveOutline;