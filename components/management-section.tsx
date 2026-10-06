import SafeImage from "@/components/SafeImage"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mrs. Bamidele Ademola-Olateju",
    position: "Honourable Commissioner for Information and Orientation",
    image: encodeURI("/images/Mrs Bamdiele Ademola Olateju.png"),
  },
  {
    id: 2,
    name: "Mr. Kayode Fasua",
    position: "Permanent Secretary",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Mr. Sola Omoboyowa",
    position: "Director of Information Services",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ManagementSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold text-orange-500">Management</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200/60 transition-all duration-300 hover:shadow-md hover:ring-orange-200 text-center">
              <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 shadow-inner">
                <SafeImage
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-600">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
