import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-RJK8xfWCo4gVidj0oujCHf8tJUxulZ.png"
                alt="Ondo MOI Logo"
                width={120}
                height={60}
                className="h-auto w-auto"
              />
            </div>
            <p className="mb-4 text-sm text-slate-300">
              The Ondo State Ministry of Information and Orientation serves as the official information dissemination
              arm of the Ondo State Government, ensuring transparent communication between the government and the
              citizens of Ondo State.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">Office</h3>
            <address className="not-italic text-sm text-slate-300">
              Ministry of Information and Orientation
              <br />
              Government Secretariat Complex
              <br />
              Alagbaka, Akure
              <br />
              Ondo State, Nigeria
            </address>
            <p className="mt-2 text-sm text-slate-300">info@ondomoi.gov.ng</p>
            <p className="mt-1 text-sm text-slate-300">+234 803 123 4567</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-orange-500">
                  News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/active-directory" className="hover:text-orange-500">
                  Active Directory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-500">Newsletter</h3>
            <p className="mb-4 text-sm text-slate-300">
              Stay informed about government activities, policies, and programs by subscribing to our newsletter for
              timely updates.
            </p>
            <NewsletterForm />
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://twitter.com/OndoMOI"
                className="rounded-full bg-slate-700 p-2 text-white hover:bg-orange-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com/OndoMOI"
                className="rounded-full bg-slate-700 p-2 text-white hover:bg-orange-500"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/OndoMOI"
                className="rounded-full bg-slate-700 p-2 text-white hover:bg-orange-500"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
        <p>Ondo State Ministry Of Information And Orientation © {currentYear} | All Rights Reserved</p>
      </div>
    </footer>
  )
}
