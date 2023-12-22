import Image from "next/image"
import logo from "@public/logo.svg"

export function Logo() {
  return (
    <Image
      width={0}
      height={0}
      className="w-6 sm:w-8 lg:w-11"
      src={logo}
      alt="logo"
      priority
    />
  )
}
