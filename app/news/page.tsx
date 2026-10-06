import SafeImage from "@/components/SafeImage"
import Link from "next/link"
import NewsletterSection from "@/components/newsletter-section"

interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  author: string
  slug: string
}

const pressReleases: NewsItem[] = [
  {
    id: 1,
    title: "Governor Lucky Orimisan Aiyedatiwa Directs Accelerated Completion of Strategic Road Corridors Across Ondo State",
    category: "GOVERNANCE",
    date: "OCTOBER 18, 2024",
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
    author: "Ministry of Information",
    slug: "governor-aiyedatiwa-road-corridors",
  },
  {
    id: 2,
    title: "Commissioner Bamidele Ademola-Olateju Unveils Grassroots Civic Enlightenment Campaign",
    category: "COMMUNICATION",
    date: "SEPTEMBER 25, 2024",
    image: encodeURI("/images/Mrs Bamdiele Ademola Olateju.png"),
    author: "Information Bureau",
    slug: "commissioner-olateju-civic-campaign",
  },
  {
    id: 3,
    title: "Ondo State Honors Enduring Democratic Legacies and Public Infrastructure Milestones of Late Governor Rotimi Akeredolu",
    category: "MEMORIAL",
    date: "FEBRUARY 24, 2024",
    image: encodeURI("/images/Akeredolu Oluwarotimi Odunayo.png"),
    author: "Cabinet Press",
    slug: "akeredolu-democratic-legacies",
  },
  {
    id: 4,
    title: "Ministry of Health Launches Maternal & Child Healthcare Expansion Initiative",
    category: "HEALTHCARE",
    date: "AUGUST 14, 2024",
    image: encodeURI("/images/Dr.Banji Awolowo Ajaka.png"),
    author: "Health Department",
    slug: "health-expansion-initiative",
  },
  {
    id: 5,
    title: "Attorney General Sir Charles Titiloye Expands Access to Citizen Legal Aid and Alternative Dispute Resolution",
    category: "JUSTICE",
    date: "JULY 30, 2024",
    image: encodeURI("/images/Sir.Charles Titiloye (SAN).png"),
    author: "Ministry of Justice",
    slug: "titiloye-legal-aid-expansion",
  },
  {
    id: 6,
    title: "Infrastructure Ministry Commences Urban Renewal and Drainage Infrastructure in Akure Metropolis",
    category: "INFRASTRUCTURE",
    date: "JUNE 19, 2024",
    image: encodeURI("/images/Engineer Raimi Aminu.png"),
    author: "Works Bureau",
    slug: "infrastructure-urban-renewal",
  },
]

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Education Ministry Unveils Smart Classroom and STEM Integration Scheme for Public Secondary Schools",
    category: "EDUCATION",
    date: "MAY 22, 2024",
    image: encodeURI("/images/Hon. Femi Agagu.png"),
    author: "Education Media",
    slug: "education-stem-integration",
  },
  {
    id: 2,
    title: "Energy Ministry Advances Clean Energy and Mini-Grid Deployment for Coastal Communities",
    category: "ENERGY",
    date: "APRIL 17, 2024",
    image: encodeURI("/images/Engineer Razaq Obe.png"),
    author: "Energy Resources Bureau",
    slug: "energy-clean-power-deployment",
  },
  {
    id: 3,
    title: "Budget and Economic Planning Ministry Presents Citizens Budget Framework for Fiscal Transparency",
    category: "ECONOMY",
    date: "MARCH 11, 2024",
    image: encodeURI("/images/Mr. Emmanuel Igbasan.png"),
    author: "Economic Planning Unit",
    slug: "budget-citizens-framework",
  },
  {
    id: 4,
    title: "Local Government Affairs Ministry Convenes Strategic Traditional Rulers Forum on Community Security",
    category: "SECURITY",
    date: "FEBRUARY 05, 2024",
    image: encodeURI("/images/Hon. Adewale Akinlosotu.png"),
    author: "Chieftaincy Affairs",
    slug: "chieftaincy-traditional-forum",
  },
  {
    id: 5,
    title: "Agriculture Ministry Distributes High-Yield Seedlings and Subsidized Tractors to Ondo Farmers",
    category: "AGRICULTURE",
    date: "JANUARY 28, 2024",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
    author: "Agro Media",
    slug: "agriculture-tractor-distribution",
  },
  {
    id: 6,
    title: "Youth and Sports Ministry Launches Statewide Youth Innovation and Grassroots Athletics Championship",
    category: "SPORTS",
    date: "JANUARY 15, 2024",
    image: encodeURI("/images/Hon. Bamidele Ologun.png"),
    author: "Sports Commission",
    slug: "youth-sports-championship",
  },
]

export default function News() {
  return (
    <>
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-orange-500">News</h1>

        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Press Release</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200">
                <Link href={`/news/${item.slug}`}>
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium uppercase text-orange-500">{item.category}</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <Link href={`/news/${item.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-3 line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-500">By {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">News</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200">
                <Link href={`/news/${item.slug}`}>
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium uppercase text-orange-500">{item.category}</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <Link href={`/news/${item.slug}`} className="hover:text-orange-500">
                    <h3 className="mb-3 line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-500">By {item.author}</p>
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
