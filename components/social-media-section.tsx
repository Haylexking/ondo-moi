import Image from "next/image"
import Link from "next/link"
import { Twitter, Facebook, Instagram } from "lucide-react"

interface SocialPost {
  id: number
  platform: "twitter" | "facebook" | "instagram"
  content: string
  image: string
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    platform: "twitter",
    content:
      "Governor Aiyedatiwa inspects ongoing road construction projects across Ondo State. The projects are part of the government's commitment to improving infrastructure and enhancing connectivity. #OndoState #Infrastructure",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    platform: "facebook",
    content:
      "The Ministry of Information and Orientation congratulates all students who participated in the State Schools Quiz Competition. Your dedication to academic excellence is commendable. #OndoEducation #AcademicExcellence",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    platform: "instagram",
    content:
      "Beautiful scenes from the Ondo State Cultural Festival held yesterday at the Dome Cultural Center, Akure. The event showcased the rich cultural heritage of our dear state. #OndoCulture #CulturalHeritage",
    image: "/placeholder.svg?height=200&width=350",
  },
]

const PlatformIcon = ({ platform }: { platform: SocialPost["platform"] }) => {
  switch (platform) {
    case "twitter":
      return <Twitter className="h-5 w-5" />
    case "facebook":
      return <Facebook className="h-5 w-5" />
    case "instagram":
      return <Instagram className="h-5 w-5" />
  }
}

export default function SocialMediaSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-3xl font-bold text-orange-500">Social Media</h2>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com/OndoMOI"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500"
            >
              See more <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://facebook.com/OndoMOI"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500"
            >
              See more <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com/OndoMOI"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500"
            >
              See more <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {socialPosts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <span className="font-medium">Ondo MOI</span>
                <PlatformIcon platform={post.platform} />
              </div>
              <div className="p-4">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.platform} post`}
                    width={350}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
                <p className="text-sm text-gray-600">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
