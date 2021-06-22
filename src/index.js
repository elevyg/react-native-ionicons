import {Icons} from "./map"

export function Icon({name, size, color, borderWidth}) {
  return Icons[name] === undefined ? Icons["help"]({
    height: size,
    width: size,
    fill: color,
  }) : Icons[name]({
    height: size,
    width: size,
    fill: color,
  })
}