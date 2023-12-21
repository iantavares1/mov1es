import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Topbar } from "@/components/Topbar/Topbar"
import { Footer } from "@/components/Footer"
import { Providers } from "./Providers"

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
        <Providers>
          <div className="relative bg-primary text-onPrimary">
            <Topbar />

            <main id="main">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
