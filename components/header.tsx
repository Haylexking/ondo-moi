"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MobileNav from "./mobile-nav"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Active Directory", href: "/active-directory" },
]

export default function Header() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-RJK8xfWCo4gVidj0oujCHf8tJUxulZ.png"
              alt="Ondo MOI Logo"
              width={80}
              height={40}
              className="h-auto w-auto"
            />
          </Link>
          <nav className="hidden gap-8 md:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || (item.name === "Active Directory" && pathname.startsWith("/active-directory"))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-orange-500 font-fira-sans border-b-2 border-transparent",
                    isActive
                      ? "text-orange-500 border-orange-500"
                      : "text-slate-700"
                  )}

                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <div className="relative flex items-center rounded-full border border-gray-300">
              <Input
                type="search"
                placeholder="Search Here"
                className="w-[200px] rounded-full border-0 pr-10 font-lora"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
          </form>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
