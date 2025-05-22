"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import NewsletterSection from "@/components/newsletter-section"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  slug: string
}

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "winning-fit-everytime-1",
  },
  {
    id: 2,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "winning-fit-everytime-2",
  },
  {
    id: 3,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "winning-fit-everytime-3",
  },
]

const recentPosts: BlogPost[] = [
  {
    id: 1,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-1",
  },
  {
    id: 2,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-2",
  },
  {
    id: 3,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-3",
  },
  {
    id: 4,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-4",
  },
  {
    id: 5,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-5",
  },
  {
    id: 6,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-6",
  },
  {
    id: 7,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-7",
  },
  {
    id: 8,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-8",
  },
  {
    id: 9,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-9",
  },
  {
    id: 10,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-10",
  },
  {
    id: 11,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-11",
  },
  {
    id: 12,
    title: "Follow This Formular For A Winning Fit Everytime",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Andrew Smith",
    date: "August 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "winning-fit-everytime-12",
  },
]

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-orange-500">Blogs</h1>

        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Featured Blogs</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredPosts.map((post) => (
                  <div key={post.id} className="min-w-full px-4">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
                      <div className="relative h-64 w-full md:h-auto md:w-1/2">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <h3 className="mb-3 text-xl font-semibold">
                            <Link href={`/blogs/${post.slug}`} className="hover:text-orange-500">
                              {post.title}
                            </Link>
                          </h3>
                          <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <p className="mb-4 text-gray-600">{post.excerpt}</p>
                        </div>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-sm font-medium text-orange-500 hover:underline"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-orange-500 hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-orange-500 hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-center text-2xl font-bold">Recently Added</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/blogs/${post.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{post.title}</h3>
                  </Link>
                  <div className="mb-3 flex flex-wrap gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                  <Link href={`/blogs/${post.slug}`} className="text-sm font-medium text-orange-500 hover:underline">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-orange-500 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-orange-500 text-white">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-orange-500 hover:text-white">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-orange-500 hover:text-white">
                3
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-orange-500 hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
