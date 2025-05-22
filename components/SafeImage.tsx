// components/SafeImage.tsx
"use client"
import Image, { ImageProps } from "next/image"
import { useState } from "react"

export default function SafeImage(props: ImageProps) {
  const [src, setSrc] = useState(props.src)

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc("/placeholder.svg?height=150&width=150")}
      alt={props.alt}
    />
  )
}
