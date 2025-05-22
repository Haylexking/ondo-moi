import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold text-orange-500">About Us</h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-gray-700">
            The Ondo State Ministry of Information and Orientation is the official information dissemination arm of the
            Ondo State Government. We are committed to ensuring effective communication between the government and the
            people of Ondo State through various media platforms.
          </p>
          <p className="mb-8 text-gray-700">
            Our mission is to promote transparency, accountability, and citizen engagement by providing accurate and
            timely information about government policies, programs, and activities. We also work to showcase the rich
            cultural heritage, tourism potential, and investment opportunities in Ondo State.
          </p>
          <Link href="/about-us">
            <Button className="bg-orange-500 hover:bg-orange-600">Learn More About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
