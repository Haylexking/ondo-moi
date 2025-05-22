import type React from "react"
import type { Metadata } from "next"
import { Fira_Sans, Lora } from "next/font/google"
import "./globals.css"
import BodyWrapper from "@/components/BodyWrapper"

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-sans",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Ondo State Ministry of Information and Orientation",
  description: "Official website of the Ondo State Ministry of Information and Orientation",
  keywords: ["Ondo State", "Ministry of Information", "Government", "Nigeria", "Orientation"],
  authors: [{ name: "Ondo State Ministry of Information and Orientation" }],
  creator: "Ondo State Ministry of Information and Orientation",
  publisher: "Ondo State Ministry of Information and Orientation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${firaSans.variable} ${lora.variable} font-lora`}>
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  )
}
