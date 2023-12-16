import { useRef } from "react"

export function useMovieRow() {
  const rowRef = useRef<HTMLDivElement>(null)

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

  return {
    rowRef,
    handleRowNavigation,
  }
}
