import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  slug: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ondo State Government Partners with World Bank on Rural Access and Agricultural Marketing Project",
    category: "DEVELOPMENT",
    date: "July 10, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "world-bank-partnership",
  },
  {
    id: 2,
    title: "Ministry of Information Launches Digital Media Training for Youth in Ondo State",
    category: "EDUCATION",
    date: "July 5, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "digital-media-training",
  },
  {
    id: 3,
    title: "Ondo State Celebrates Cultural Day with Exhibition of Arts and Crafts",
    category: "CULTURE",
    date: "June 28, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "cultural-day-celebration",
  },
  {
    id: 4,
    title: "Governor Aiyedatiwa Receives Award for Educational Development in Ondo State",
    category: "EDUCATION",
    date: "June 20, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "governor-education-award",
  },
  {
    id: 5,
    title: "Ondo State Government Unveils New Tourism Masterplan",
    category: "TOURISM",
    date: "June 15, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "tourism-masterplan",
  },
  {
    id: 6,
    title: "Ministry of Health Launches Vaccination Campaign Against Childhood Diseases",
    category: "HEALTH",
    date: "June 8, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "vaccination-campaign",
  },
]

export default function LatestNewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-orange-500">Latest News</h2>
          <Link href="/news" className="text-orange-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/news/${news.slug}`}>
                <div className="relative h-48 w-full">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
              </Link>
              <div className="p-4">
                <span className="mb-2 inline-block rounded bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                  {news.category}
                </span>
                <Link href={`/news/${news.slug}`} className="hover:text-orange-500">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{news.title}</h3>
                </Link>
                <p className="text-sm text-gray-500">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
