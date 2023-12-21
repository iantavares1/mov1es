"use client"

import { useRef, useState } from "react"
import { Modal } from "@mui/material"
import { Close, Search } from "@mui/icons-material"
import { useRouter } from "next/navigation"

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const router = useRouter()

  const handleOpenModal = () => setShouldOpenModal(true)
  const handleCloseModal = () => setShouldOpenModal(false)

  const handleClearInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
    setSearchValue("")
  }

  return (
    <>
      {!shouldOpenModal ? (
        <button onClick={handleOpenModal}>
          <Search />
        </button>
      ) : (
        <Modal open onClose={handleCloseModal} className="m-300">
          <>
            <div className="relative">
              <Search className="absolute left-100 top-1/2 -translate-y-1/2 transform" />

              <input
                placeholder="Search"
                ref={inputRef}
                value={searchValue}
                onChange={(e) => {
                  const value = e.target.value

                  setSearchValue(value)
                  value === ""
                    ? router.push(`/`)
                    : router.push(`/search/${value}`)
                }}
                autoFocus
                className="pl- w-full rounded-lg px-700 py-100 outline-none"
              />

              {searchValue !== "" && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-100 top-1/2 -translate-y-1/2 transform"
                >
                  <Close />
                </button>
              )}
            </div>
          </>
        </Modal>
      )}
    </>
  )
}
