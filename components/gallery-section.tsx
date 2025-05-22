"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 1" },
  { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 2" },
  { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 3" },
  { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 4" },
  { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 5" },
  { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Gallery image 6" },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null)

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-orange-500">Gallery</h2>
          <Link href="/gallery" className="text-orange-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-48 cursor-pointer overflow-hidden rounded-lg md:h-64"
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeLightbox}>
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[80vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              width={800}
              height={600}
              className="h-auto max-h-[80vh] w-auto rounded"
            />
          </div>
        </div>
      )}
    </section>
  )
}
