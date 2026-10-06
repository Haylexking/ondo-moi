"use client"

import { useState } from "react"
import SafeImage from "@/components/SafeImage"
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
    title: "Ondo State Agricultural Renaissance: Empowering Cocoa & Oil Palm Farmers",
    excerpt: "Exploring the state government's strategic input subsidies, high-yield seedlings distribution, and rural feeder road expansion across agrarian communities.",
    author: "Information Bureau",
    date: "October 12, 2024",
    image: encodeURI("/images/Rectangle 39.png"),
    slug: "agricultural-renaissance-cocoa-farmers",
  },
  {
    id: 2,
    title: "Preserving Cultural Heritage: Traditional Festivals and Tourism Horizons in Ondo",
    excerpt: "How the Ministry of Culture and Information is documenting sacred heritage sites from the Idanre Hills to traditional festivals across the three senatorial districts.",
    author: "Culture & Tourism Desk",
    date: "September 28, 2024",
    image: encodeURI("/images/Olotu Orege.png"),
    slug: "preserving-cultural-heritage-idanre",
  },
  {
    id: 3,
    title: "Expanding Healthcare Coverage: The Contributory Health Insurance Scheme in Focus",
    excerpt: "An in-depth review of healthcare access improvements, revitalized basic health centers, and maternal care subsidies under Governor Lucky Aiyedatiwa.",
    author: "Public Health Liaison",
    date: "August 15, 2024",
    image: encodeURI("/images/Dr.Banji Awolowo Ajaka.png"),
    slug: "expanding-healthcare-contributory-scheme",
  },
]

const recentPosts: BlogPost[] = [
  {
    id: 1,
    title: "Strategic Infrastructure Corridors: Bridging Urban-Rural Economic Divides",
    excerpt: "Key highway rehabilitation projects enhancing commercial transit between Akure, Ondo town, and the riverine economic belt.",
    author: "Works & Infrastructure Team",
    date: "October 18, 2024",
    image: encodeURI("/images/Rectangle 16.png"),
    slug: "strategic-infrastructure-corridors",
  },
  {
    id: 2,
    title: "Empowering Next-Gen Leaders: Ondo State Youth Entrepreneurship Initiatives",
    excerpt: "Vocational skills training, tech innovation grants, and MSME funding driving economic self-reliance for young people.",
    author: "Youth Affairs Desk",
    date: "October 14, 2024",
    image: encodeURI("/images/Hon. Bamidele Ologun.png"),
    slug: "youth-entrepreneurship-initiatives",
  },
  {
    id: 3,
    title: "Digital Literacy & Modern Classrooms: Reimagining Public Basic Education",
    excerpt: "Deploying interactive learning devices, training educators, and upgrading public school infrastructure statewide.",
    author: "Education Ministry",
    date: "October 02, 2024",
    image: encodeURI("/images/Hon. Femi Agagu.png"),
    slug: "digital-literacy-public-education",
  },
  {
    id: 4,
    title: "Local Government Autonomy: Deepening Grassroots Administrative Delivery",
    excerpt: "Empowering council administrations to drive rural water supply, primary health delivery, and community peacebuilding.",
    author: "Chieftaincy Affairs Bureau",
    date: "September 22, 2024",
    image: encodeURI("/images/Hon. Adewale Akinlosotu.png"),
    slug: "local-government-grassroots-delivery",
  },
  {
    id: 5,
    title: "Ondo Deep Seaport Project: Unlocking Maritime Trade and Global Industrialization",
    excerpt: "A comprehensive update on regulatory clearances, private sector partnerships, and projected job creation in Ilaje.",
    author: "Economic Planning Team",
    date: "September 10, 2024",
    image: encodeURI("/images/Mr. Emmanuel Igbasan.png"),
    slug: "deep-seaport-maritime-trade",
  },
  {
    id: 6,
    title: "Renewable Energy and Clean Power Access for Rural Communities",
    excerpt: "Deploying solar micro-grids and off-grid power solutions to light up agrarian farm settlements across Ondo State.",
    author: "Energy & Mineral Resources",
    date: "August 29, 2024",
    image: encodeURI("/images/Engineer Razaq Obe.png"),
    slug: "renewable-energy-clean-power-access",
  },
  {
    id: 7,
    title: "Civic Orientation and Community Engagement: The Role of Town Hall Forums",
    excerpt: "Promoting participatory democracy by bringing state executive officials directly to community dialogue tables.",
    author: "Ministry of Information",
    date: "August 18, 2024",
    image: "/images/ondo-official-seal.svg",
    slug: "civic-orientation-town-hall-forums",
  },
  {
    id: 8,
    title: "Afforestation and Forest Reserve Protection: Combating Illegal Encroachment",
    excerpt: "Protecting vital biodiversity corridors while expanding certified tree plantations for sustainable agro-forestry.",
    author: "Forestry Department",
    date: "August 04, 2024",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
    slug: "afforestation-forest-reserve-protection",
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
                        <SafeImage src={post.image || "/images/ondo-official-seal.svg"} alt={post.title} fill className="object-cover" />
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
                    <SafeImage src={post.image || "/images/ondo-official-seal.svg"} alt={post.title} fill className="object-cover" />
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
