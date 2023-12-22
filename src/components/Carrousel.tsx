"use client"

import { useEffect, useRef, useState } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

export function Carrousel({ children }: React.PropsWithChildren) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [shouldDisplayNavigationButton, setShouldDisplayNavigationButton] =
    useState({
      left: false,
      right: true,
    })

  const handleRowNavigation = (direction: "left" | "right") => {
    const row = rowRef.current

    if (row) {
      const scrollAmount =
        direction === "left"
          ? row.scrollLeft - (row.offsetWidth + 20)
          : row.scrollLeft + (row.offsetWidth + 20)

      row.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const row = rowRef.current

    const handleScroll = () => {
      if (row) {
        const isAtStart = row.scrollLeft === 0
        const isAtEnd = row.scrollLeft + row.offsetWidth >= row.scrollWidth - 5

        setShouldDisplayNavigationButton((prev) => ({
          left: isAtStart ? false : true,
          right: isAtEnd ? false : true,
        }))
      }
    }

    row?.addEventListener("scroll", handleScroll)

    return () => {
      row?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full">
      <NavigationButton
        direction="left"
        onNavigation={handleRowNavigation}
        hide={!shouldDisplayNavigationButton.left}
      />

      <div
        ref={rowRef}
        className="flex gap-200 overflow-y-hidden overflow-x-scroll sm:gap-400 md:overflow-x-hidden lg:gap-800"
      >
        {children}
      </div>

      <NavigationButton
        direction="right"
        onNavigation={handleRowNavigation}
        hide={!shouldDisplayNavigationButton.right}
      />
    </div>
  )
}

function NavigationButton({
  direction,
  hide = false,
  onNavigation,
}: {
  direction: "left" | "right"
  hide?: boolean
  onNavigation: (direction: "left" | "right") => void
}) {
  return (
    <button
      onClick={() => onNavigation(direction)}
      className={`${
        direction === "left" ? "-left-2" : "-right-2"
      } absolute top-1/2 z-10 hidden ${
        hide ? "md:hidden" : "md:block"
      } rounded-full bg-tertiary p-0.5 lg:p-1.5`}
    >
      {direction === "left" ? (
        <KeyboardArrowLeft className="lg:text-[32px]" />
      ) : (
        <KeyboardArrowRight className="lg:text-[32px]" />
      )}
    </button>
  )
}
