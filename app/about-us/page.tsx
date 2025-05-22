import Image from "next/image"
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
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "Mrs Bamidele Ademola Olateju",
    position: "Commissioner Of Information & Orientation",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutUs() {
  return (
    <>
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-orange-500">About Us</h1>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Our Mission</h2>
          <div className="prose max-w-none">
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit
              sit consequat. Urna se ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Our Vision</h2>
          <div className="prose max-w-none">
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit
              sit consequat. Urna se ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">The Ministry</h2>
          <div className="prose max-w-none">
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit
              sit consequat. Urna se ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
            <p>
              Quis faucibus justo iaculis augue tellus. Viverra id tristique consectetur eget nisi. Sapien aliquam in
              nisl posuere incorper. Purus morbi nulla auctor velit sit consequat. Urna se ulputate luctus arcu quis
              arcu. Felis cursus et lorem quam donec iaculis. Purus morbi nulla auctor velit sit consequat. Urna se
              ulputate luctus arcu quis arcu. Felis cursus et lorem quam donec iaculis.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold text-orange-500">Management</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
