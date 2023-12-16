"use client"

import { useTopbar } from "./hooks/useTopbar"
import Link from "next/link"
import { Logo } from "../Logo"
import { Search } from "@mui/icons-material"

export const Topbar = () => {
  const { shouldShowBackground } = useTopbar()

  return (
    <header
      className={`fixed top-0 z-50 flex w-screen justify-between ${
        shouldShowBackground && "bg-primary"
      } p-3 transition-all duration-[350ms]`}
    >
      <Link href={"/"} className="flex items-center gap-1">
        <Logo />

        <span className="hidden font-bold">Movies App</span>
      </Link>

      <Search />
    </header>
  )
}
