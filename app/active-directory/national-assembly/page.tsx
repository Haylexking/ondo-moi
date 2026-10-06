import Image from "next/image"
import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import { Search, Twitter, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

interface Senator {
  name: string
  district: string
}

const senatorsData = {
  "2018-2023": [
    { name: "Senator Ayo Akinyelure", district: "Ondo Central" },
    { name: "Senator Nicholas Tofowomo", district: "Ondo South" },
    { name: "Senator (Prof.) Ajayi Boroffice", district: "Ondo North" },
  ],
  "2015-2019": [
    { name: "Senator Ayo Akinyelure", district: "Ondo Central" },
    { name: "Senator Nicholas Tofowomo", district: "Ondo South" },
    { name: "Senator (Prof.) Ajayi Boroffice", district: "Ondo North" },
  ],
  "2011-2015": [
    { name: "Senator Ayo Akinyelure", district: "Ondo Central" },
    { name: "Senator Nicholas Tofowomo", district: "Ondo South" },
    { name: "Senator (Prof.) Ajayi Boroffice", district: "Ondo North" },
  ],
}

const representativesData = {
  "2023-Date": [
    { name: "Hon. Donald Ojogo", district: "Ilaje/Ese-Odo Federal Constituency" },
    { name: "Hon. Adegboyega Adefarati", district: "Akoko South West/South East" },
    { name: "Hon. Timehin Adelegbe", district: "Owo/Ose Federal Constituency" },
    { name: "Hon. Festus Adefiranye", district: "Ile-Oluji/Okeigbo/Odigbo" },
  ],
  "2019-2023": [
    { name: "Hon. Mayowa Akinfolarin", district: "Ile-Oluji/Okeigbo/Odigbo" },
    { name: "Hon. Timehin Adelegbe", district: "Owo/Ose Federal Constituency" },
    { name: "Hon. Peter Akpatason", district: "Akoko South West/South East" },
  ],
  "2015-2019": [
    { name: "Hon. Kolade Akinjo", district: "Ilaje/Ese-Odo Federal Constituency" },
    { name: "Hon. Babatunde Kolawole", district: "Akoko South West/South East" },
    { name: "Hon. Bode Ayorinde", district: "Owo/Ose Federal Constituency" },
  ],
}

const newsItems = [
  {
    id: 1,
    title:
      "GOVERNOR AIYEDATIWA COMMENDS ONDO CAUCUS AT NATIONAL ASSEMBLY FOR STATE DEVELOPMENT ADVOCACY",
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
    category: "GOVERNANCE",
    date: "OCTOBER 15, 2024",
  },
  {
    id: 2,
    title:
      "REP. DONALD OJOGO CHAMPIONS RIVERS & WATERWAYS EMPOWERMENT BILL FOR RIVERINE COMMUNITIES",
    image: encodeURI("/images/Mr. Donald Ojogo.png"),
    category: "NATIONAL ASSEMBLY",
    date: "NOVEMBER 04, 2024",
  },
  {
    id: 3,
    title:
      "REP. ADEGBOYEGA ADEFARATI FLAGS OFF AGRICULTURAL SCHOLARSHIP AND EMPOWERMENT DRIVE",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
    category: "EMPOWERMENT",
    date: "JANUARY 12, 2024",
  },
  {
    id: 4,
    title:
      "ONDO LEADERS REFLECT ON LATE GOVERNOR ROTIMI AKEREDOLU'S ENDURING INFRASTRUCTURE LEGACIES",
    image: encodeURI("/images/Akeredolu Oluwarotimi Odunayo.png"),
    category: "SPECIAL REPORT",
    date: "MARCH 20, 2024",
  },
]

export default function NationalAssembly() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/National%20Assembly-M23Rl3PBvRZNU2CMFRULFHGg59rKR2.png"
          alt="National Assembly"
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
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">National Assembly</h1>
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
            <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500">
              <h3 className="mb-1 font-semibold">Senators</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500">
              <h3 className="mb-1 font-semibold">House of Representatives</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Senators</h2>
          <div className="space-y-8">
            {Object.entries(senatorsData).map(([period, senators]) => (
              <div key={period}>
                <h3 className="mb-4 text-xl font-semibold">{period}</h3>
                <div className="space-y-2">
                  {senators.map((senator, index) => (
                    <div key={index} className="text-gray-700">
                      <p>
                        <span className="font-medium">{senator.name}</span>
                        <br />
                        {senator.district}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">House of Representatives</h2>
          <div className="space-y-8">
            {Object.entries(representativesData).map(([period, representatives]) => (
              <div key={period}>
                <h3 className="mb-4 text-xl font-semibold">{period}</h3>
                <div className="space-y-2">
                  {representatives.map((representative, index) => (
                    <div key={index} className="text-gray-700">
                      <p>
                        <span className="font-medium">{representative.name}</span>
                        <br />
                        {representative.district}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NewsletterSection />

      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange-500">Latest News</h2>
            <Link href="/news" className="text-orange-500 hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newsItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-gray-200/60">
                  <SafeImage src={item.image} alt={item.title} fill className="object-cover object-top" />
                </div>
                <div>
                  <div className="mb-1">
                    <span className="text-xs font-medium uppercase text-orange-500">{item.category}</span>
                    <span className="mx-2 text-xs text-gray-400">|</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="line-clamp-2 text-sm font-medium">
                    <Link href="#" className="hover:text-orange-500">
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-900">
                  <SafeImage
                    src="/images/ondo-official-seal.svg"
                    alt="Twitter post"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Governor Lucky Aiyedatiwa reaffirms commitment to Ondo youth empowerment, rural industrialization, and infrastructure expansion across all three senatorial districts.
                </p>
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-400 hover:underline">
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
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-900">
                  <SafeImage
                    src="/images/ondo-official-seal.svg"
                    alt="Facebook post"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Ministry of Information and Orientation partners with grassroots stakeholders to sensitize rural communities on healthcare initiatives and agricultural inputs.
                </p>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
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
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-900">
                  <SafeImage
                    src="/images/ondo-official-seal.svg"
                    alt="Instagram post"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Highlights from the Ondo State cultural showcase and educational reforms summit held at the International Culture & Event Centre (The Dome), Akure.
                </p>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-pink-500 hover:underline">
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
