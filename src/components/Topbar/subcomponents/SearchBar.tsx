"use client"

import { useEffect, useRef, useState } from "react"
import { Modal } from "@mui/material"
import { Close, Search } from "@mui/icons-material"
import { useRouter, usePathname } from "next/navigation"

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [searchValue, setSearchValue] = useState("")

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
          <Search className="sm:text-[32px] lg:text-[44px]" />
        </button>
      ) : (
        <Modal open onClose={handleCloseModal} className="m-300">
          <div className="mx-auto flex w-full max-w-[1280px] justify-end overflow-hidden pr-6">
            <div className="relative w-full sm:w-[420px] lg:w-[500px]">
              <Search className="absolute left-100 top-1/2 -translate-y-1/2 transform lg:text-[44px]" />

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
