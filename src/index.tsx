import { FC } from "react"
import { Icons } from "./map"

interface Props {
  name: keyof typeof Icons
  size: number
  color: string
}

export const Icon: FC<Props> = ({name, size, color}) => {
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