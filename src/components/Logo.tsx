import Image from "next/image"
import React from "react"

export function Logo() {
  return (
    <Image
      width={0}
      height={0}
      className="w-6"
      src="logo.svg"
      alt="logo"
      priority
    />
  )
}
