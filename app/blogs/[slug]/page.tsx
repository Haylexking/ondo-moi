import Image from "next/image"
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
    title: "Viverra Idtristiqut ectrew Egetnisi: Sapien aliquam innisl.",
    author: {
      name: "Taiwo Adekola",
      role: "Editorial staff",
      image: "/placeholder.svg?height=50&width=50",
    },
    date: "JULY 23, 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog%20Post-hxUFTMuQ9uLVFJSReT5FdUgCF88QKA.png",
    content: `
      <p>In a groundbreaking development for the automotive industry and the environment, engineers and scientists have unveiled a revolutionary solar-powered car that promises to reshape the future of transportation. The unveiling took place at the SolarTech Expo, a prestigious event showcasing cutting-edge solar innovations.</p>
      
      <p>The brainchild of a collaboration between leading automaker SolarDrive Inc. and solar technology giant SunPower Solutions, this futuristic vehicle is equipped with cutting-edge photovoltaic cells integrated into its body, harnessing the power of the sun to propel itself forward.</p>
      
      <p>SolarDrive CEO, Dr. Amelia Roberts, described the project as a "milestone in sustainable transportation." She explained, "Our solar-powered car marks a significant step toward reducing our reliance on fossil fuels, curbing carbon emissions, and combating climate change."</p>
      
      <h2>How it Works</h2>
      
      <p>The solar-powered car, known as the "SunRider," features a sleek, aerodynamic design with solar panels covering its entire surface area. These advanced solar panels capture sunlight during the day, converting it into electricity to charge the vehicle's batteries. The stored energy can be used for driving, even during cloudy days or at night.</p>
      
      <h2>Key Features</h2>
      
      <ul>
        <li>Zero Emissions: The SunRider is a zero-emission vehicle, emitting no harmful greenhouse gases during operation.</li>
        <li>Long-Range: Thanks to its efficient energy conversion and storage system, the car boasts an impressive range on a single charge.</li>
        <li>Regenerative Braking: The SunRider incorporates regenerative braking technology, further enhancing its energy efficiency.</li>
      </ul>
      
      <h2>Industry Experts Weigh In</h2>
      
      <p>Prominent environmentalist and advocate for renewable energy, Dr. Michael Turner, praised the innovation, saying: "The SunRider demonstrates the immense potential of solar technology in addressing the environmental challenges we face. It's a game-changer for clean transportation."</p>
      
      <h2>The Road Ahead</h2>
      
      <p>SolarDrive Inc. and SunPower Solutions are currently finalizing production plans for the SunRider, with expectations of rolling out the first batch of solar-powered cars within the next year. Industry analysts predict a surge in demand as eco-conscious consumers seek sustainable alternatives to traditional vehicles.</p>
      
      <p>As the world grapples with the climate crisis, the SunRider offers a glimmer of hope, highlighting the innovative solutions that could lead us to a cleaner, greener future.</p>
    `,
    relatedPosts: [
      {
        id: 1,
        title: "Navigating Uncertainty with Faith: Trusting God's Plan",
        image: "/placeholder.svg?height=200&width=300",
        slug: "navigating-uncertainty-1",
        author: "Andrew Smith",
        date: "August 10, 2023",
      },
      {
        id: 2,
        title: "Navigating Uncertainty with Faith: Trusting God's Plan",
        image: "/placeholder.svg?height=200&width=300",
        slug: "navigating-uncertainty-2",
        author: "Andrew Smith",
        date: "August 10, 2023",
      },
      {
        id: 3,
        title: "Navigating Uncertainty with Faith: Trusting God's Plan",
        image: "/placeholder.svg?height=200&width=300",
        slug: "navigating-uncertainty-3",
        author: "Andrew Smith",
        date: "August 10, 2023",
      },
    ],
  }

  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
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
                <Image
                  src={post.author.image || "/placeholder.svg"}
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
                      <Image
                        src={related.image || "/placeholder.svg"}
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
