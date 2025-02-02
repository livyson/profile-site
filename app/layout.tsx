import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { SideTabs } from "./components/side-tabs"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Livyson Saymon - Technology Leader",
  description:
    "Personal website of Livyson Saymon, Head of Technology with 13+ years of experience in software engineering and team leadership.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <SideTabs />
        <main className="pt-12 sm:pt-0">{children}</main>
      </body>
    </html>
  )
}

