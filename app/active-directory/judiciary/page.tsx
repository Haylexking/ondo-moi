import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

interface JudiciaryMember {
  name: string
  title: string
  image: string
}

const courtOfAppealMembers: JudiciaryMember[] = [
  {
    name: "Akeredolu Oluwarotimi Odunayo",
    title: "Chief Judge",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Hon. Lucky Orimisan Aiyedatiwa",
    title: "Chief Judge",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Princess Oladunni Odu",
    title: "Chief Judge",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const honourableCommissioners: JudiciaryMember[] = [
  {
    name: "Mr. Adewale Olumuyiwa",
    title: "Commissioner",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mr. Emmanuel Igbasan",
    title: "Commissioner",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Hon. Femi Agagu",
    title: "Commissioner",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mrs. Yetunde Adeyanju",
    title: "Commissioner",
    image: "/placeholder.svg?height=150&width=150",
  },
]

export default function Judiciary() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Judiciary-RITjskjZ4rSfjd17iPuEPtHyCrVKQz.png"
          alt="Judiciary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container">
            <div className="inline-block bg-orange-500 px-3 py-1">
              <span className="text-xs font-medium uppercase text-white">POLITICS</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Judiciary</h1>
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
            <p className="text-gray-700">
              Embark on a digital odyssey through time, governance, and the heartbeat of Ondo State. Welcome to the
              Active Directory, your interactive guide to the essence of our community.
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/active-directory/judiciary/executive-council"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Executive Council</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/judiciary/commissioners"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Honourable Commissioners</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/judiciary/court-of-appeal"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Court of Appeal</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/judiciary/commissioners"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Honourable Commissioners</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Court of Appeal</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {courtOfAppealMembers.map((member, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Honourable Commissioners</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {honourableCommissioners.map((commissioner, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={commissioner.image || "/placeholder.svg"}
                    alt={commissioner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold">{commissioner.name}</h3>
                  <p className="text-sm text-gray-500">{commissioner.title}</p>
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
