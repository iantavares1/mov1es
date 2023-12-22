"use client"

import { useEffect, useRef, useState } from "react"
import { Modal, useMediaQuery } from "@mui/material"
import { Close, Search } from "@mui/icons-material"
import { useRouter, usePathname } from "next/navigation"

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const isDefaultBreakpoint = useMediaQuery("(max-width:419px)")
  const isSmBreakpoint = useMediaQuery(
    "(min-width:420px) and (max-width:639px)"
  )
  const isMdBreakpoint = useMediaQuery(
    "(min-width:640px) and (max-width:859px)"
  )

  const router = useRouter()
  const pathName = usePathname()

  const handleOpenModal = () => setShouldOpenModal(true)
  const handleCloseModal = () => setShouldOpenModal(false)

  const handleClearInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = ""
      setSearchValue("")
      setSearchValue("")
    }
    setSearchValue("")
  }

  useEffect(
    () => setSearchValue((prev) => (pathName === "/" ? "" : prev)),
    [pathName]
  )

  return (
    <>
      {!shouldOpenModal ? (
        <button onClick={handleOpenModal}>
          <Search
            sx={{
              fontSize: isDefaultBreakpoint
                ? 24
                : isSmBreakpoint || isMdBreakpoint
                  ? 32
                  : 44,
            }}
          />
        </button>
      ) : (
        <Modal open onClose={handleCloseModal} className="m-300">
          <div className="mx-auto flex w-full max-w-[1280px] justify-end overflow-hidden 2xl:pr-6">
            <div className="relative w-full sm:w-[420px] lg:w-[500px]">
              <Search
                className="absolute left-100 top-1/2 -translate-y-1/2 transform"
                sx={{
                  fontSize: isDefaultBreakpoint
                    ? 24
                    : isSmBreakpoint || isMdBreakpoint
                      ? 32
                      : 44,
                }}
              />

              <input
                placeholder="Search"
                ref={inputRef}
                value={searchValue}
                onChange={(e) => {
                  const value = e.target.value

                  setSearchValue(value)
                  if (value === "") {
                    handleClearInput()
                    return
                  }

                  router.push(`/search/${value}`)
                }}
                autoFocus
                className="w-full rounded-lg px-700 py-100 outline-none lg:px-1000 lg:text-[24px]"
              />

              {searchValue !== "" && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-100 top-1/2 -translate-y-1/2 transform"
                >
                  <Close className="lg:text-[44px]" />
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
