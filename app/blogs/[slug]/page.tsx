import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import { User, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import NewsletterSection from "@/components/newsletter-section"

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // In a real app, you would fetch the post data based on the slug
  const post = {
    title: "Ondo State Agricultural Renaissance: Empowering Rural Farmers and Youth Agripreneurs",
    author: {
      name: "Ministry Information Bureau",
      role: "Official Press Desk",
      image: "/images/ondo-official-seal.svg",
    },
    date: "OCTOBER 14, 2024",
    image: "/images/ondo-official-seal.svg",
    content: `
      <p>In a groundbreaking development for agricultural industrialization and food security, the Ondo State Government under Governor Lucky Orimisan Aiyedatiwa has inaugurated new farmer empowerment programs and expanded access to soft loans and high-yield inputs.</p>
      
      <p>The strategic framework focuses on transforming rural economies, scaling cocoa and oil palm value chains, and creating modern agricultural clusters for youth across the 18 Local Government Areas.</p>
      
      <h2>Policy Priorities</h2>
      <ul>
        <li>Subsidized organic fertilizer and disease-resistant seedlings distribution.</li>
        <li>Access road rehabilitation to connect rural farm settlements directly to urban markets.</li>
        <li>Youth training in mechanized farming, greenhouse horticulture, and agro-processing.</li>
      </ul>
    `,
    relatedPosts: [
      {
        id: 1,
        title: "Ondo State Invests in Deep Seaport and Coastal Economic Corridor",
        image: "/images/ondo-official-seal.svg",
        slug: "ondo-deep-seaport-corridor",
        author: "Press Unit",
        date: "September 28, 2024",
      },
      {
        id: 2,
        title: "Healthcare Infrastructure Upgrade: Revitalizing Primary Health Centers Across Ondo",
        image: "/images/ondo-official-seal.svg",
        slug: "healthcare-upgrade-ondo",
        author: "Health Desk",
        date: "October 02, 2024",
      },
      {
        id: 3,
        title: "Civil Service Welfare and Prompt Pension Disbursements: The Sunshine State Model",
        image: "/images/ondo-official-seal.svg",
        slug: "civil-service-welfare",
        author: "Information Bureau",
        date: "October 10, 2024",
      },
    ],
  }

  return (
    <>
      <div className="relative h-[400px] w-full">
        <SafeImage src={post.image || "/images/ondo-official-seal.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl text-white">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <SafeImage
                  src={post.author.image || "/images/ondo-official-seal.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="ml-auto text-sm text-gray-500">POSTED ON {post.date}</div>
          </div>

          <article className="prose max-w-none lg:prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-orange-500">More Blogs</h2>
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {post.relatedPosts.map((related) => (
                <div key={related.id} className="group">
                  <Link href={`/blogs/${related.slug}`}>
                    <div className="relative mb-3 h-48 overflow-hidden rounded-lg">
                      <SafeImage
                        src={related.image || "/images/ondo-official-seal.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <Link href={`/blogs/${related.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-2 text-lg font-semibold">{related.title}</h3>
                  </Link>
                  <div className="flex flex-col gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{related.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{related.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSection />
    </>
  )
}
