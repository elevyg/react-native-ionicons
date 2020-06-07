import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWarning(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z" />
    </Svg>
  );
}

export default SvgWarning;

