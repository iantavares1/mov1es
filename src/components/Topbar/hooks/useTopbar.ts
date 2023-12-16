import { useEffect, useState } from "react"

export function useTopbar() {
  const [shouldShowBackground, setShouldShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShouldShowBackground(() => scrollPosition > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { shouldShowBackground }
}
