import { ReactNode } from "react"
import { backgroundHeight } from "../constants"
import Image from "next/image"

const GGrey = () => {
  return (
    <Image
      src="/g-grey.svg"
      alt="G grey background"
      width={1000}
      height={1000}
      sizes="100vw"
      style={{
        height: backgroundHeight,
        position: 'absolute',
        left: -140,
        zIndex: -1,
      }}
    />
  )
}

export default GGrey
