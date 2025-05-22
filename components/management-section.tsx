import Image from "next/image"

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
    image: "/placeholder.svg?height=300&width=300",
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
            <div key={member.id} className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-auto w-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
