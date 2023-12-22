"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import tmdbLogo from "@/publictmdb-logo.svg"
import { KeyboardArrowUp } from "@mui/icons-material"

export const Footer = () => {
  const [showBackTopButton, setShowBackTopButton] = useState(false)

  const handleScroll = () =>
    setShowBackTopButton(
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? true
        : false
    )

  const backToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer
      className={`fixed bottom-0 z-50 flex h-[8dvh] w-screen max-w-[1280px] sm:px-500 ${
        showBackTopButton ? "justify-between" : "justify-end"
      } bg-primary px-300`}
    >
      {showBackTopButton && (
        <button onClick={backToTop}>
          <KeyboardArrowUp className="sm:text-[32px] lg:text-[44px]" />
        </button>
      )}

      <div className="flex items-center gap-2">
        <span className="hidden max-w-[30ch] text-[9px] lg:block lg:text-[12px]">
          Este produto usa a API TMDB, mas não é endossado ou certificado pelo
          TMDB
        </span>

        <Link href={"https://www.themoviedb.org/"} target="blank">
          <Image
            width={0}
            height={0}
            className="w-12 lg:w-16"
            src={tmdbLogo}
            alt="TMDB logo"
          />
        </Link>
      </div>
    </footer>
  )
}
