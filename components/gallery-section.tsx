"use client"

import { useState } from "react"
import Image from "next/image"
import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"), alt: "Governor Lucky Orimisan Aiyedatiwa" },
  { id: 2, src: encodeURI("/images/Mrs Bamdiele Ademola Olateju.png"), alt: "Commissioner Bamidele Ademola-Olateju" },
  { id: 3, src: encodeURI("/images/Princess Oladunni Odu.png"), alt: "SSG Princess Catherine Oladunni Odu" },
  { id: 4, src: encodeURI("/images/Sir.Charles Titiloye (SAN).png"), alt: "Attorney General Sir Charles Titiloye (SAN)" },
  { id: 5, src: encodeURI("/images/Rectangle 39.png"), alt: "Ondo State Governance and Leadership" },
  { id: 6, src: encodeURI("/images/Olotu Orege.png"), alt: "High Chief Olotu Orege" },
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
              className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200"
              onClick={() => openLightbox(image)}
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 hover:scale-105"
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
            <SafeImage
              src={currentImage.src}
              alt={currentImage.alt}
              width={800}
              height={533}
              className="h-auto max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
