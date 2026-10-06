import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"
import SafeImage from "@/components/SafeImage"

interface CouncilMember {
  name: string
  title: string
  image: string
}

const executiveCouncilMembers: CouncilMember[] = [
  {
    name: "Hon. Lucky Orimisan Aiyedatiwa",
    title: "Executive Governor of Ondo State",
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
  },
  {
    name: "Dr. Olayide Owolabi Adelami",
    title: "Deputy Governor of Ondo State",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Princess Catherine Oladunni Odu",
    title: "Secretary to the State Government",
    image: encodeURI("/images/Princess Oladunni Odu.png"),
  },
  {
    name: "Mr. Dare Aragbaye",
    title: "Special Adviser on Union Matters & Special Duties",
    image: encodeURI("/images/Mr. Dare Aragbaye.png"),
  },
  {
    name: "Mr. Babajide Akeredolu",
    title: "DG, Project Implementation Monitoring Unit",
    image: encodeURI("/images/Mr. Babajide Akeredolu.png"),
  },
  {
    name: "Chief Olugbenga Ale",
    title: "Chief of Staff to the Governor",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mr. Olugbenga Ajiboye",
    title: "Head of Service",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const honourableCommissioners: CouncilMember[] = [
  {
    name: "Mrs. Bamidele Ademola-Olateju",
    title: "Commissioner for Information and Orientation",
    image: encodeURI("/images/Mrs Bamdiele Ademola Olateju.png"),
  },
  {
    name: "Dr. Banji Ajaka",
    title: "Commissioner for Health",
    image: encodeURI("/images/Dr.Banji Awolowo Ajaka.png"),
  },
  {
    name: "Engr. Raimi Aminu",
    title: "Commissioner for Infrastructure, Lands and Housing",
    image: encodeURI("/images/Engineer Raimi Aminu.png"),
  },
  {
    name: "Hon. Olufemi Agagu",
    title: "Commissioner for Education, Science and Technology",
    image: encodeURI("/images/Hon. Femi Agagu.png"),
  },
  {
    name: "Sir Charles Titiloye (SAN)",
    title: "Attorney General and Commissioner for Justice",
    image: encodeURI("/images/Sir.Charles Titiloye (SAN).png"),
  },
  {
    name: "Engr. Razaq Obe",
    title: "Commissioner for Energy, Mines and Mineral Resources",
    image: encodeURI("/images/Engineer Razaq Obe.png"),
  },
  {
    name: "Pastor Emmanuel Igbasan",
    title: "Commissioner for Budget and Economic Planning",
    image: encodeURI("/images/Mr. Emmanuel Igbasan.png"),
  },
  {
    name: "Hon. Adewale Akinlosotu",
    title: "Commissioner for Local Government and Chieftaincy Affairs",
    image: encodeURI("/images/Hon. Adewale Akinlosotu.png"),
  },
  {
    name: "Hon. Adegboyega Adefarati",
    title: "Commissioner for Agriculture and Forestry",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
  },
  {
    name: "Hon. Bamidele Ologun",
    title: "Commissioner for Youth and Sports Development",
    image: encodeURI("/images/Hon. Bamidele Ologun.png"),
  },
  {
    name: "Mrs. Yetunde Adeyanju",
    title: "Commissioner for Water Resources, Public Sanitation & Hygiene",
    image: encodeURI("/images/Mrs. Yetunde Adeyanju.png"),
  },
  {
    name: "Mr. Donald Ojogo",
    title: "Former Commissioner for Information and Orientation",
    image: encodeURI("/images/Mr. Donald Ojogo.png"),
  },
  {
    name: "Mr. Adewale Olumuyiwa",
    title: "Honourable Commissioner",
    image: encodeURI("/images/Mr. Adewale Olumuyiwa.png"),
  },
  {
    name: "Prince Dayo Awude",
    title: "Commissioner for Finance",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mr. Akinwumi Sowore",
    title: "Commissioner for Commerce, Industry and Cooperative Services",
    image: "/placeholder.svg?height=150&width=150",
  },
]

export default function Politics() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Politics.png-dzDu0ofx6iWHwqklgukaIBjBBXdpDR.jpeg"
          alt="Politics"
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
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Politics</h1>
            <p className="mt-2 max-w-xl text-white">Discover Ondo State: A Journey Through History and Governance</p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Get acquainted with the dynamic political landscape of Ondo. In this section, explore the key figures
              shaping the state's governance structure, from the Executive Council to the Honourable Commissioners.
              Delve into the Executive Council's responsibilities, unveiling the individuals spearheading the state's
              policy development.
            </p>
            <p className="text-gray-700">
              The Executive Council, led by the Governor, Hon. Lucky Orimisan Aiyedatiwa, is the highest decision-making
              body in the state. The council formulates policies, implements programs, and ensures the effective
              administration of the state. Working alongside the Governor is the Deputy Governor, Dr. Olayide Owolabi
              Adelami, who provides strategic support and oversees specific areas of governance.
            </p>
            <p className="text-gray-700">
              Commissioners head various ministries and are responsible for implementing government policies in their
              respective sectors. Each Commissioner plays a crucial role in steering the ship of state affairs,
              contributing to the overall progress and well-being of Ondo's residents. They work collaboratively with
              the Executive Council to achieve the state's development goals.
            </p>
            <p className="text-gray-700">
              Stay informed about the state's updates, policy decisions, and strategic moves within Ondo's political
              sphere. Whether you're a resident, researcher, or simply curious about governance, this section offers a
              comprehensive snapshot of the individuals driving Ondo forward.
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
              href="/active-directory/politics/executive-council"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Executive Council</h3>
              <p className="text-sm text-gray-500">Explore the governing council of Ondo State</p>
            </Link>
            <Link
              href="/active-directory/politics/commissioners"
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-500"
            >
              <h3 className="mb-1 font-semibold">Honourable Commissioners</h3>
              <p className="text-sm text-gray-500">Explore the history of Ondo State</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Executive Council</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {executiveCouncilMembers.map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-orange-600">{member.name}</h3>
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
              <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <SafeImage
                    src={commissioner.image}
                    alt={commissioner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-orange-600">{commissioner.name}</h3>
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
