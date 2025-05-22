import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

interface MilitaryAdministrator {
  name: string
  title: string
  period: string
}

const militaryAdministrators = [
  {
    period: "March, 1976 - July, 1978",
    administrators: [
      {
        name: "Wing Commander Ita David Ikpeme",
        title: "Military Administrator",
        period: "March, 1976 - July, 1978",
      },
    ],
  },
  {
    period: "July, 1978 - September, 1979",
    administrators: [
      {
        name: "Brigadier Sunny Esijolomi Tuoyo",
        title: "Military Administrator",
        period: "July, 1978 - September, 1979",
      },
    ],
  },
  {
    period: "March, 1976 - July, 1978",
    administrators: [
      {
        name: "Chief Michael Adekunde Ajasin",
        title: "Governor",
        period: "March, 1976 - July, 1978",
      },
      {
        name: "Chief Akin Omoboriowo",
        title: "Deputy",
        period: "March, 1976 - July, 1978",
      },
      {
        name: "Dr Nathaniel Aina",
        title: "Secretary",
        period: "March, 1976 - July, 1978",
      },
    ],
  },
]

export default function Military() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Millitary-eqBwMnwRrcFNf6DRgtwlMjHFsoN9DH.png"
          alt="Military"
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
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Military</h1>
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
              href="/active-directory/military/administrators"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Military Administrators/ Governors</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/military/secretaries"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Permanent Secretaries</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Military Administrators/ Governors</h2>
          <div className="space-y-12">
            {militaryAdministrators.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-2">
                <h3 className="mb-4 text-xl font-semibold">{group.period}</h3>
                <div className="space-y-6">
                  {group.administrators.map((admin, adminIndex) => (
                    <div key={adminIndex} className="text-gray-700">
                      <p className="font-medium">{admin.name}</p>
                      {admin.title && <p className="text-sm text-gray-500">{admin.title}</p>}
                    </div>
                  ))}
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
