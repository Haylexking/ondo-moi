// components/SafeImage.tsx
"use client"
import Image, { ImageProps } from "next/image"
import { useState, useEffect } from "react"

function formatImageUrl(url: any): any {
  if (typeof url !== "string") return url
  try {
    return encodeURI(decodeURI(url))
  } catch {
    return url
  }
}

export default function SafeImage({ src, alt, className, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...props}
      src={formatImageUrl(imgSrc)}
      onError={() => setImgSrc("/images/ondo-official-seal.svg")}
      alt={alt || "Ondo State official portrait"}
      className={className}
    />
  )
}
