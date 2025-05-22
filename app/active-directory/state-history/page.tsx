import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsletterSection from "@/components/newsletter-section"

export default function StateHistory() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/State%20History-GAGT3HaAbQiQr0PhfWEVjnI2MVr315.png"
          alt="State History"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container">
            <div className="inline-block bg-orange-500 px-3 py-1">
              <span className="text-xs font-medium uppercase text-white">HISTORY</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">State History</h1>
            <p className="mt-2 max-w-xl text-white">Discover Ondo State: A Journey Through History and Governance</p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-orange-500">Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome to the historical journey of Ondo State, a land rich in cultural heritage and significant
              milestones. Established on February 3, 1976, Ondo State emerged from the former Western State, unfolding a
              narrative that intertwines with the heart of southwestern Nigeria.
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
          <h2 className="mb-6 text-2xl font-bold text-orange-500">State History</h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-xl font-semibold">Early History</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Ondo State, often referred to as the "Sunshine State," was established on 3 February 1976, carved out
                  from the former Western State. The state is blessed with abundant natural resources and unique
                  ecological features. It shares borders with Ekiti, Kogi, Edo, Delta, Ogun, Osun, and the Atlantic
                  Ocean.
                </p>
                <p className="text-gray-700">
                  The state is the 18th most populous in Nigeria, with a rich cultural heritage represented by the
                  Yoruba people, the Yoruba language is widely spoken. Ondo State's economy is diverse, with a
                  significant presence in the petroleum industry. Cocoa production, asphalt mining, and coastal
                  activities contribute to its economic vibrancy. Notably, the Idanre inselberg hills, hosting the
                  highest geographical point in the western half of Nigeria, add to the state's geographical allure.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Historical Transition</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The state's historical landscape includes the initial existence of Ekiti State with Ondo State until
                  its separation in 1996 by the General Sani Abacha. Prior to the split, the state encompassed the
                  entire area of the former Ondo province, creating Akure as its provincial headquarters.
                </p>
                <p className="text-gray-700">
                  Ondo State officially commenced its journey on April 1, 1976, with Akure retaining its status as the
                  capital. Like other Nigerian states, Ondo has transitioned offices representing the federal
                  government.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Natural Wonders</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The state is blessed with breathtaking natural wonders that showcase Ondo State's beauty. The numerous
                  springs near the Idanre hill stories of ecological diversity. The Idanre inselberg hills, reaching
                  over 1,000 meters, offer not just stunning views but a testament to geological marvels that have
                  shaped the state's topography.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Economic Tapestry</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Beyond the oil-rich landscapes, Ondo State boasts a diverse economic portfolio. Cocoa production, with
                  its historical significance, continues to thrive and vibrant coastal activities, forming a robust
                  economic foundation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Diverse Cultures</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The Yoruba-speaking populace, predominant in urban centers, nurtures a cultural legacy that seamlessly
                  blends tradition and modernity. Festivals, art, and the daily lives of its citizens weave a rich
                  tapestry, reflecting the vibrant soul of the state.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Historical Landmarks</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  From ancient structures in Akure to sites that commemorate pivotal moments in the state's history,
                  each landmark is a chapter, telling tales of resilience, progress, and cultural continuity.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Cultural Heritage</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Explore the customs, rituals, and artistic expressions that have been passed down through generations.
                  Traditional festivals, and cultural events provide a living testament to the enduring spirit of the
                  people.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <NewsletterSection />
    </>
  )
}
