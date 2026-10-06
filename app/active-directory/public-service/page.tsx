import Image from "next/image"
import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

interface Secretary {
  name: string
  period: string
}

interface PermanentSecretary {
  name: string
  title: string
  description: string
  image: string
}

const secretariesData = {
  "1970-1978": [
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
  ],
  "1978-1986": [
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
    { name: "Chief T. A. Irejigmo", period: "1970-1978" },
  ],
}

const permanentSecretaries: PermanentSecretary[] = [
  {
    name: "Princess Catherine Oladunni Odu",
    title: "Secretary to the State Government",
    description: "Coordinating the state administrative machinery and executive policies.",
    image: encodeURI("/images/Princess Oladunni Odu.png"),
  },
  {
    name: "Mrs. Bamidele Ademola-Olateju",
    title: "Commissioner for Information & Orientation",
    description: "Leading state communications, strategic orientation, and public enlightenment.",
    image: encodeURI("/images/Mrs Bamdiele Ademola Olateju.png"),
  },
  {
    name: "Mr. Dare Aragbaye",
    title: "Special Adviser on Union Matters & Special Duties",
    description: "Fostering labour relations and public sector productivity.",
    image: encodeURI("/images/Mr. Dare Aragbaye.png"),
  },
  {
    name: "Mr. Babajide Akeredolu",
    title: "DG, Project Implementation Monitoring Unit",
    description: "Spearheading milestone tracking and governance infrastructure delivery.",
    image: encodeURI("/images/Mr. Babajide Akeredolu.png"),
  },
  {
    name: "Sir Charles Titiloye (SAN)",
    title: "Attorney General & Commissioner for Justice",
    description: "Preserving rule of law and statutory legal affairs for the state.",
    image: encodeURI("/images/Sir.Charles Titiloye (SAN).png"),
  },
  {
    name: "Pastor Emmanuel Igbasan",
    title: "Commissioner for Budget & Economic Planning",
    description: "Strategic state fiscal framework, resource allocation, and planning.",
    image: encodeURI("/images/Mr. Emmanuel Igbasan.png"),
  },
  {
    name: "Engr. Raimi Aminu",
    title: "Commissioner for Infrastructure, Lands & Housing",
    description: "Directing public works, urban development, and structural initiatives.",
    image: encodeURI("/images/Engineer Raimi Aminu.png"),
  },
  {
    name: "Hon. Adewale Akinlosotu",
    title: "Commissioner for Local Government & Chieftaincy Affairs",
    description: "Strengthening grassroots community administration and traditional councils.",
    image: encodeURI("/images/Hon. Adewale Akinlosotu.png"),
  },
]

export default function PublicService() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Public%20Service.png-lfaAVDWHg9mr9GGIyY6QKiI792lfK2.jpeg"
          alt="Public Service"
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
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Public Service</h1>
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
              href="/active-directory/public-service/secretaries"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Secretaries to the State Governor</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/public-service/permanent-secretaries"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Permanent Secretaries</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Secretaries to the State Governors</h2>
          <div className="space-y-8">
            {Object.entries(secretariesData).map(([period, secretaries]) => (
              <div key={period} className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {secretaries.map((secretary, index) => (
                  <div key={index} className="text-center">
                    <p className="font-medium">{secretary.name}</p>
                    <p className="text-sm text-gray-500">{secretary.period}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Permanent Secretaries & Principal Officers</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {permanentSecretaries.map((secretary, index) => (
              <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <SafeImage
                    src={secretary.image}
                    alt={secretary.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-orange-600">{secretary.name}</h3>
                  <p className="mb-2 text-xs font-medium text-orange-500">{secretary.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{secretary.description}</p>
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
