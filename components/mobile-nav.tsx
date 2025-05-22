"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Active Directory", href: "/active-directory" },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full max-w-full sm:max-w-sm md:hidden" side="right">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-RJK8xfWCo4gVidj0oujCHf8tJUxulZ.png"
                alt="Ondo MOI Logo"
                width={120}
                height={60}
                className="h-auto w-auto"
              />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex-1 overflow-auto px-4 py-6">
            <form onSubmit={handleSearch} className="mb-8 flex w-full items-center space-x-2">
              <Input
                type="search"
                placeholder="Search Here"
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" size="icon" className="shrink-0 bg-orange-500 hover:bg-orange-600">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>

            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.name === "Active Directory" && pathname.startsWith("/active-directory"))

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-orange-500",
                      isActive ? "text-orange-500" : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
