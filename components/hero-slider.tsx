"use client"

import { useState, useEffect } from "react"
import SafeImage from "@/components/SafeImage"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideProps {
  id: number
  image: string
  category: string
  title: string
  excerpt: string
  link: string
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
    category: "GOVERNANCE",
    title: "Governor Aiyedatiwa Inaugurates New Cabinet Members",
    excerpt:
      "The Governor of Ondo State, Hon. Lucky Orimisan Aiyedatiwa, has inaugurated new cabinet members to drive the state's development agenda.",
    link: "/news/governor-inaugurates-cabinet",
  },
  {
    id: 2,
    image: encodeURI("/images/Rectangle 39.png"),
    category: "INFRASTRUCTURE",
    title: "Ondo State Commissions Road Networks and Strategic Infrastructure",
    excerpt:
      "In a move to boost economic activities and ease transportation, the Ondo State Government accelerates state-wide infrastructure delivery.",
    link: "/news/road-network-commissioned",
  },
  {
    id: 3,
    image: encodeURI("/images/Hon. Femi Agagu.png"),
    category: "EDUCATION",
    title: "Ondo State Launches Digital Learning Initiative for Public Schools",
    excerpt:
      "The state government has launched a comprehensive digital learning program to enhance educational standards across all public schools in Ondo State.",
    link: "/news/digital-learning-initiative",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="relative h-full w-full">
            <SafeImage
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-2xl text-white">
                  <span className="mb-2 inline-block bg-orange-500 px-3 py-1 text-xs font-semibold uppercase">
                    {slide.category}
                  </span>
                  <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{slide.title}</h1>
                  <p className="mb-6 text-sm md:text-base">{slide.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn("h-2 w-2 rounded-full", index === currentSlide ? "bg-orange-500" : "bg-white/50")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
