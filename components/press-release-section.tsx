import SafeImage from "@/components/SafeImage"
import Link from "next/link"

interface PressRelease {
  id: number
  title: string
  date: string
  image: string
  slug: string
}

const pressReleases: PressRelease[] = [
  {
    id: 1,
    title: "Ondo State Government Announces New Measures to Boost Agricultural Production",
    date: "June 15, 2023",
    image: encodeURI("/images/Hon. Adefarati Adegboyega.png"),
    slug: "agricultural-production-measures",
  },
  {
    id: 2,
    title: "Governor Aiyedatiwa Flags Off Construction of Akure-Ado Ekiti Dual Carriageway",
    date: "May 28, 2023",
    image: encodeURI("/images/Hon. Lucky Orimisan Aiyedatiwa.png"),
    slug: "akure-ado-ekiti-road",
  },
  {
    id: 3,
    title: "Ondo State Launches Health Insurance Scheme for Civil Servants",
    date: "April 12, 2023",
    image: encodeURI("/images/Dr.Banji Awolowo Ajaka.png"),
    slug: "health-insurance-scheme",
  },
]

export default function PressReleaseSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold text-orange-500">Press Release</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pressReleases.map((press) => (
            <div
              key={press.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={`/news/${press.slug}`}>
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                  <SafeImage
                    src={press.image}
                    alt={press.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/news/${press.slug}`} className="hover:text-orange-500">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{press.title}</h3>
                </Link>
                <p className="text-sm text-gray-500">{press.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
