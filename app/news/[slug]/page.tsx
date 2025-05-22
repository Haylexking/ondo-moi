import Image from "next/image"
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
    title: "Breakthrough in Energy: Solar-Powered Cars Now a Reality",
    subtitle: "Innovative Technology Paves the Way for Environmentally-Friendly Transportation",
    category: "FINANCE",
    author: "Taiwo Adekola",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "JULY 23, 2023",
    image: "/placeholder.svg?height=500&width=1200",
    content: `
      <p>In a groundbreaking development for the automotive industry and the environment, engineers and scientists have unveiled a revolutionary solar-powered car that promises to reshape the future of transportation. The unveiling took place at the SolarTech Expo, a prestigious event showcasing cutting-edge solar innovations.</p>
      
      <p>The brainchild of a collaboration between leading automaker SolarDrive Inc. and solar technology giant SunPower Solutions, this futuristic vehicle is equipped with cutting-edge photovoltaic cells integrated into its body, harnessing the power of the sun to propel itself forward.</p>
      
      <p>Speaking at the event, Dr. Amelia Roberts, described the project as a "milestone in sustainable transportation." She explained, "Our solar-powered car marks a significant step toward reducing our reliance on fossil fuels, curbing carbon emissions, and combating climate change."</p>
      
      <h2>How it Works</h2>
      
      <p>The solar-powered car, known as the 'SunRider,' features a sleek, aerodynamic design with solar panels covering its entire surface area. These advanced solar panels capture sunlight during the day, converting it into electricity to charge the vehicle's batteries. The stored energy can be used for driving, even during cloudy days or at night.</p>
      
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
        title:
          "COVID-19: Akeredolu's Aide, Asade Donates Food Items, Washing Hand Buckets And Nose Masks To Residents In Akure",
        date: "August 18, 2023",
        image: "/placeholder.svg?height=200&width=350",
        slug: "covid-19-akeredolus-aide-1",
      },
      {
        id: 2,
        title:
          "COVID-19: Akeredolu's Aide, Asade Donates Food Items, Washing Hand Buckets And Nose Masks To Residents In Akure",
        date: "August 18, 2023",
        image: "/placeholder.svg?height=200&width=350",
        slug: "covid-19-akeredolus-aide-2",
      },
      {
        id: 3,
        title:
          "COVID-19: Akeredolu's Aide, Asade Donates Food Items, Washing Hand Buckets And Nose Masks To Residents In Akure",
        date: "August 18, 2023",
        image: "/placeholder.svg?height=200&width=350",
        slug: "covid-19-akeredolus-aide-3",
      },
    ],
  }

  return (
    <>
      <div className="relative h-[500px] w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
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
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
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
                    <Image
                      src={related.image || "/placeholder.svg"}
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
