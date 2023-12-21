"use client"

import { useTopbar } from "./hooks/useTopbar"
import Link from "next/link"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"

export const Topbar = () => {
  const { shouldShowBackground } = useTopbar()

  return (
    <header
      className={`fixed top-0 z-50 flex w-screen justify-between ${
        shouldShowBackground && "bg-primary"
      } p-300 transition-all duration-[350ms]`}
    >
      <Link href={"/"}>
        <Logo />
      </Link>

      <SearchBar />
    </header>
  )
}
