import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SearchContextData = {
  searchValue: string
  handleSearch: (value: string) => void
}

const SearchContext = createContext({} as SearchContextData)

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value: string) => {
    setSearchValue(value)
    navigate(value !== '' ? `/search/${value}` : '/')
  }

  return (
    <SearchContext.Provider value={{ searchValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  return useContext(SearchContext)
}
