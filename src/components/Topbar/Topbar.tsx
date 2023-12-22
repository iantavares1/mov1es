"use client"

import { useTopbar } from "./hooks/useTopbar"
import Link from "next/link"
import { Logo } from "@/components/Logo"
import { SearchBar } from "./subcomponents/SearchBar"

export const Topbar = () => {
  const { shouldShowBackground } = useTopbar()

  return (
    <header
      className={`fixed top-0 z-50 flex h-[8dvh] w-screen max-w-[1280px] justify-between sm:px-500 ${
        shouldShowBackground && "bg-primary"
      } px-300 transition-all duration-[350ms]`}
    >
      <Link href={"/"} className="flex">
        <Logo />
      </Link>

      <SearchBar />
    </header>
  )
}
