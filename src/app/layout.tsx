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
    <html
      lang="pt-Br"
      className="scrollbar scrollbar-track-primary scrollbar-thumb-gray-800"
    >
      <Providers>
        <body className={inter.className}>
          <div className="relative bg-primary text-onPrimary">
            <div className="relative mx-auto max-w-[1280px]">
              <Topbar />

              <main id="main">{children}</main>

              <Footer />
            </div>
          </div>
        </body>
      </Providers>
    </html>
  )
}
