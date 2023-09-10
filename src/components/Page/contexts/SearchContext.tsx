import { PropsWithChildren, createContext, useContext, useState } from 'react'

type SearchContextData = {
  searchValue: string
  handleSearch: (value: string) => void
}

const SearchContext = createContext({} as SearchContextData)

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  return (
    <SearchContext.Provider value={{ searchValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}
