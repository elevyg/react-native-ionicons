import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCameraReverseOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M196 272l-20-20-20 20M356 272l-20 20-20-20"
      />
    </Svg>
  );
}

export default SvgCameraReverseOutline;

