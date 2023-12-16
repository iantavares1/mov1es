import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Topbar } from "@/components/Topbar/Topbar"
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
        <div className="relative min-h-[100dvh] bg-primary text-onPrimary">
          <Topbar />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
