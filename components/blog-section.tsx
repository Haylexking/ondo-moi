import Image from "next/image"
import Link from "next/link"
import { User, Calendar } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rich Cultural Heritage of Ondo State: A Journey Through History",
    excerpt:
      "Explore the diverse cultural traditions, festivals, and historical landmarks that make Ondo State a cultural treasure trove in Nigeria.",
    author: "Adebayo Johnson",
    date: "July 15, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "cultural-heritage-ondo",
  },
  {
    id: 2,
    title: "Economic Opportunities in Ondo State: Sectors Ripe for Investment",
    excerpt:
      "Discover the various economic sectors in Ondo State that present lucrative opportunities for local and foreign investors.",
    author: "Funmilayo Adekoya",
    date: "July 8, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "investment-opportunities-ondo",
  },
  {
    id: 3,
    title: "Tourism Destinations in Ondo State: Hidden Gems to Explore",
    excerpt:
      "From the Idanre Hills to the Oke-Maria Hills, Ondo State is home to numerous natural attractions waiting to be explored by tourists.",
    author: "Tunde Olatunji",
    date: "June 30, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "tourism-destinations-ondo",
  },
  {
    id: 4,
    title: "Educational Development in Ondo State: Progress and Challenges",
    excerpt:
      "An analysis of the educational landscape in Ondo State, highlighting achievements, ongoing initiatives, and areas for improvement.",
    author: "Dr. Folake Adedeji",
    date: "June 22, 2023",
    image: "/placeholder.svg?height=200&width=350",
    slug: "educational-development-ondo",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-orange-500">Blog</h2>
          <Link href="/blogs" className="text-orange-500 hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
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
      </div>
    </section>
  )
}
