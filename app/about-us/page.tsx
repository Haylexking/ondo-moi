import SafeImage from "@/components/SafeImage"
import NewsletterSection from "@/components/newsletter-section"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Hon. Lucky Orimisan Aiyedatiwa",
    position: "Executive Governor of Ondo State",
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
  },
  {
    id: 2,
    name: "Chief Olayide Owolabi Adelami",
    position: "Deputy Governor of Ondo State",
    image: "/images/ondo-official-seal.svg",
  },
  {
    id: 3,
    name: "Dr. Taiwo Olumide Fasoranti",
    position: "Secretary to the State Government (SSG)",
    image: "/images/ondo-official-seal.svg",
  },
  {
    id: 4,
    name: "Hon. Idowu Ajanaku",
    position: "Honourable Commissioner for Information & Orientation",
    image: "/images/ondo-official-seal.svg",
  },
  {
    id: 5,
    name: "Dr. Olukayode Ajulo (SAN)",
    position: "Attorney General & Commissioner for Justice",
    image: "/images/ondo-official-seal.svg",
  },
  {
    id: 6,
    name: "Dr. Banji Awolowo Ajaka",
    position: "Commissioner for Health",
    image: encodeURI("/images/Dr.Banji Awolowo Ajaka.png"),
  },
  {
    id: 7,
    name: "Hon. Olufemi Agagu",
    position: "Commissioner for Education, Science & Technology",
    image: encodeURI("/images/Hon. Femi Agagu.png"),
  },
  {
    id: 8,
    name: "Engr. Razaq Obe",
    position: "Commissioner for Energy, Mines & Mineral Resources",
    image: encodeURI("/images/Engineer Razaq Obe.png"),
  },
  {
    id: 9,
    name: "Pastor Emmanuel Igbasan",
    position: "Commissioner for Budget & Economic Planning",
    image: encodeURI("/images/Mr. Emmanuel Igbasan.png"),
  },
  {
    id: 10,
    name: "Hon. Adewale Akinlosotu",
    position: "Commissioner for Local Government & Chieftaincy Affairs",
    image: encodeURI("/images/Hon. Adewale Akinlosotu.png"),
  },
  {
    id: 11,
    name: "Hon. Adegboyega Adefarati",
    position: "Commissioner for Agriculture & Forestry",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
  },
  {
    id: 12,
    name: "Hon. Bamidele Ologun",
    position: "Commissioner for Youth & Sports Development",
    image: encodeURI("/images/Hon. Bamidele Ologun.png"),
  },
]

export default function AboutUs() {
  return (
    <>
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-orange-500">About Us</h1>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Our Mission</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              To foster transparent, timely, and credible two-way communication between the Ondo State Government and its citizens. We deploy modern public relations channels, digital media networks, and grassroots town halls to promote civic awareness, foster social cohesion, and encourage constructive public participation in state governance.
            </p>
            <p>
              Through professional journalistic standards, verifiable reporting, and strategic policy orientation, we safeguard public trust and illuminate the socio-economic transformations taking place across Ondo State under the administration of Governor Lucky Orimisan Aiyedatiwa.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Our Vision</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              To build a digitally empowered, proactive, and citizen-first public information apparatus that positions Ondo State as an exemplary model of democratic transparency, cultural pride, and civic engagement in Nigeria and beyond.
            </p>
            <p>
              We envision an enlightened citizenry that actively participates in policymaking, understands public sector stewardship, and champions the collective developmental milestones of the Sunshine State.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">The Ministry Mandate &amp; Core Functions</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Established as the authoritative public information organ of the Ondo State Government, the Ministry of Information and Orientation oversees government broadcast stations, print publications, digital portals, and official executive communications.
            </p>
            <p>
              Our statutory functions include managing public enlightenment campaigns on state health, education, and infrastructural policies; providing protocol and press coverage for executive state engagements; regulating public advertising across municipalities; and documenting Ondo State&apos;s rich historical and cultural archives for future generations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Management & Leadership</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="group overflow-hidden rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200 text-center">
                <div className="relative mb-3 aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100 shadow-inner">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-1 text-base font-semibold text-gray-900 transition-colors group-hover:text-orange-600">{member.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
