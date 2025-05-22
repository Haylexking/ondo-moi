import Image from "next/image"
import Link from "next/link"
import NewsletterSection from "@/components/newsletter-section"

interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  author: string
  slug: string
}

const pressReleases: NewsItem[] = [
  {
    id: 1,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-1",
  },
  {
    id: 2,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-2",
  },
  {
    id: 3,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-3",
  },
  {
    id: 4,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-4",
  },
  {
    id: 5,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-5",
  },
  {
    id: 6,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-6",
  },
]

const newsItems: NewsItem[] = [
  {
    id: 1,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-1",
  },
  {
    id: 2,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-2",
  },
  {
    id: 3,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-3",
  },
  {
    id: 4,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-4",
  },
  {
    id: 5,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-5",
  },
  {
    id: 6,
    title:
      "COVID-19: AKEREDOLU'S AIDE, ASADE DONATES FOOD ITEMS, WASHING HAND BUCKETS AND NOSE MASKS TO RESIDENTS IN AKURE",
    category: "BUSINESS",
    date: "AUGUST 18, 2023",
    image: "/placeholder.svg?height=200&width=350",
    author: "Taiwo Fadayiro",
    slug: "covid-19-akeredolus-aide-6",
  },
]

export default function News() {
  return (
    <>
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-orange-500">News</h1>

        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Press Release</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
                <Link href={`/news/${item.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium uppercase text-orange-500">{item.category}</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <Link href={`/news/${item.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-3 line-clamp-2 text-lg font-semibold">{item.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-500">By {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">News</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
                <Link href={`/news/${item.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium uppercase text-orange-500">{item.category}</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <Link href={`/news/${item.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-3 line-clamp-2 text-lg font-semibold">{item.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-500">By {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
