import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoNpm(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path fill="#010101" d="M227.6 213.1H256v57.1h-28.4z" />
      <Path
        d="M0 156v171.4h142.2V356H256v-28.6h256V156zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8zm142.2 0h-56.9v28.6h-56.9V184.6h113.8v114.3zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z"
        fill="#010101"
      />
    </Svg>
  );
}

export default SvgLogoNpm;

