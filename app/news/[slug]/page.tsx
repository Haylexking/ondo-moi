import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import { Calendar, Facebook, Twitter, Linkedin } from "lucide-react"
import NewsletterSection from "@/components/newsletter-section"

interface NewsPostProps {
  params: {
    slug: string
  }
}

export default function NewsPost({ params }: NewsPostProps) {
  // In a real app, you would fetch the post data based on the slug
  const post = {
    title: "Ondo State Approves N3.5 Billion for Rural Feeder Roads and Agricultural Access",
    subtitle: "State Executive Council Approves Major Capital Investments Across All Senatorial Districts",
    category: "INFRASTRUCTURE",
    author: "Directorate of Information",
    authorImage: "/images/ondo-official-seal.svg",
    date: "OCTOBER 15, 2024",
    image: "/images/ondo-official-seal.svg",
    content: `
      <p>The Ondo State Executive Council, presided over by Governor Lucky Orimisan Aiyedatiwa, has approved the immediate disbursement and commencement of extensive rural road rehabilitation networks aimed at facilitating agro-commodity transportation.</p>
      
      <p>Speaking to State House correspondents after the executive council session in Akure, the Commissioner for Information and Orientation, Hon. Idowu Ajanaku, stated that the initiative is an intentional pillar of the administration's economic blueprint.</p>
      
      <h2>Focus Corridors</h2>
      <ul>
        <li>Northern Senatorial District: Akoko agrarian routes and food logistics corridors.</li>
        <li>Central Senatorial District: Farming clusters linking Idanre, Ondo town, and Akure metropolis.</li>
        <li>Southern Senatorial District: Coastal road stabilization and riverine jetty improvements.</li>
      </ul>
    `,
    relatedPosts: [
      {
        id: 1,
        title: "Ondo Deep Seaport: Port Authority and Investor Consortium Finalize Operational Agreements",
        date: "October 12, 2024",
        image: "/images/ondo-official-seal.svg",
        slug: "ondo-deep-seaport-agreements",
      },
      {
        id: 2,
        title: "Gov. Aiyedatiwa Assures Ondo Civil Servants of Uninterrupted Wage and Pension Payments",
        date: "October 08, 2024",
        image: "/images/ondo-official-seal.svg",
        slug: "civil-service-pension-assurance",
      },
      {
        id: 3,
        title: "Ministry of Health Deploys Medical Consumables and Solar Freezers to Primary Clinics",
        date: "October 05, 2024",
        image: "/images/ondo-official-seal.svg",
        slug: "health-solar-clinics-deployment",
      },
    ],
  }

  return (
    <>
      <div className="relative h-[500px] w-full">
        <SafeImage src={post.image || encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png")} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl text-white">
              <span className="mb-2 inline-block bg-orange-500 px-3 py-1 text-xs font-semibold uppercase">
                {post.category}
              </span>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>
              <p className="mb-6 text-lg">{post.subtitle}</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <SafeImage
                      src={post.authorImage || "/images/ondo-official-seal.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <article className="prose max-w-none lg:prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-b border-gray-200 py-6">
            <div className="text-sm text-gray-600">
              <span className="mr-2 font-medium">Tags:</span>
              <Link href="#" className="mr-2 hover:text-orange-500">
                Energy
              </Link>
              <Link href="#" className="mr-2 hover:text-orange-500">
                Technology
              </Link>
              <Link href="#" className="hover:text-orange-500">
                Environment
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Share:</span>
              <Link
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-500 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-500 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-orange-500 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold">Related News</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {post.relatedPosts.map((related) => (
              <div
                key={related.id}
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/news/${related.slug}`}>
                  <div className="relative h-48 w-full">
                    <SafeImage
                      src={related.image || "/images/ondo-official-seal.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/news/${related.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{related.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-500">{related.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewsletterSection />
    </>
  )
}
