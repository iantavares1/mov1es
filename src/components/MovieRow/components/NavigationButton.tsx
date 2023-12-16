"use client"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

export function NavigationButton({
  direction,
  onNavigation,
}: {
  direction: "left" | "right"
  onNavigation: (direction: "left" | "right") => void
}) {
  return (
    <button
      onClick={() => onNavigation(direction)}
      className={`${
        direction === "left" ? "-left-2" : "-right-2"
      } absolute top-1/2 z-10 hidden rounded-full bg-tertiary p-0.5 md:block`}
    >
      {direction === "left" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </button>
  )
}
