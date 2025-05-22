import Image from "next/image"
import Link from "next/link"
import { Search, Twitter, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

interface QuickLink {
  title: string
  description: string
  href: string
}

const quickLinks: QuickLink[] = [
  {
    title: "State History",
    description: "Explore the history of Ondo State",
    href: "/active-directory/state-history",
  },
  {
    title: "Military",
    description: "Explore the history of Ondo State",
    href: "/active-directory/military",
  },
  {
    title: "Politics",
    description: "Explore the Political Landscape of Ondo State",
    href: "/active-directory/politics",
  },
  {
    title: "State House of Assembly",
    description: "Explore the history of Ondo State",
    href: "/active-directory/state-house-of-assembly",
  },
  {
    title: "Public Service",
    description: "Explore the history of Ondo State",
    href: "/active-directory/public-service",
  },
  {
    title: "Public Service",
    description: "Explore the history of Ondo State",
    href: "/active-directory/public-service",
  },
  {
    title: "Military",
    description: "Explore the history of Ondo State",
    href: "/active-directory/military",
  },
  {
    title: "Judiciary",
    description: "Explore the history of Ondo State",
    href: "/active-directory/judiciary",
  },
  {
    title: "Traditional Rulers",
    description: "Explore the history of Ondo State",
    href: "/active-directory/traditional-rulers",
  },
  {
    title: "National Assembly",
    description: "Explore the history of Ondo State",
    href: "/active-directory/national-assembly",
  },
]

export default function ActiveDirectory() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Active%20Directory-5Ssej7IXotTOf2rssZaM7uDJ84HivP.png"
          alt="Active Directory"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container">
            <div className="inline-block bg-orange-500 px-3 py-1">
              <span className="text-xs font-medium uppercase text-white">INFORMATION</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Active Directory</h1>
            <p className="mt-2 max-w-xl text-white">Discover Ondo State: A Journey Through History and Governance</p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Discover Ondo through the lens of our Active Directory – a dynamic platform bridging history and
              modernity. Dive into the past with curated narratives of our founding and historical milestones. Navigate
              government contacts effortlessly, accessing key services and staying informed about local events.
            </p>
            <p className="text-gray-700">
              This digital directory extends beyond information; it's a community nexus. Uncover the workings of our
              judicial system and the individuals shaping our collective journey. Evolving alongside your needs, the
              Active Directory invites exploration, engagement, and your valuable feedback.
            </p>
          </div>
        </section>

        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Input type="search" placeholder="Explore the Active Directory" className="pr-10 font-lora" />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3 text-orange-500"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Quick Link</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
              >
                <h3 className="mb-1 font-semibold">{link.title}</h3>
                <p className="text-sm text-gray-500">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <NewsletterSection />

      <section className="bg-slate-900 py-12 text-white">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Social Media</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-slate-800">
              <div className="flex items-center justify-between p-4">
                <span>Ondo MOI</span>
                <Twitter className="h-5 w-5 text-blue-400" />
              </div>
              <div className="p-4">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Twitter post"
                    width={350}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor.
                </p>
                <Link href="#" className="flex items-center gap-1 text-sm text-blue-400 hover:underline">
                  See more <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-slate-800">
              <div className="flex items-center justify-between p-4">
                <span>Ondo MOI</span>
                <Facebook className="h-5 w-5 text-blue-600" />
              </div>
              <div className="p-4">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Facebook post"
                    width={350}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor.
                </p>
                <Link href="#" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  See more <Facebook className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-slate-800">
              <div className="flex items-center justify-between p-4">
                <span>Ondo MOI</span>
                <Instagram className="h-5 w-5 text-pink-500" />
              </div>
              <div className="p-4">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Instagram post"
                    width={350}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor.
                </p>
                <Link href="#" className="flex items-center gap-1 text-sm text-pink-500 hover:underline">
                  See more <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
