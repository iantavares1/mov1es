import Image from "next/image"
import Link from "next/link"

export const Topbar = () => {
  return (
    <header>
      <Link href={"/"} className="flex items-center gap-1">
        <Image width={28} height={28} src="logo.svg" alt="logo" />
        <h1 className="font-bold">Movies App</h1>
      </Link>
    </header>
  )
}
