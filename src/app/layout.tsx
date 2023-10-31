import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Topbar } from "@/components/Topbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Movies App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-gray-900 p-4 text-white">
          <Topbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
