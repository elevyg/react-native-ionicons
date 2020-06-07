import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretForward(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
    </Svg>
  );
}

export default SvgCaretForward;

