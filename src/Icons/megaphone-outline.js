import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMegaphoneOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M407.94 52.22S321.3 160 240 160H80a16 16 0 00-16 16v96a16 16 0 0016 16h160c81.3 0 167.94 108.23 167.94 108.23 6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78zM64 256s-16-6-16-32 16-32 16-32M448 246s16-4.33 16-22-16-22-16-22M256 160v128M112 160v128"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M144 288v168a8 8 0 008 8h53a16 16 0 0015.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgMegaphoneOutline;

