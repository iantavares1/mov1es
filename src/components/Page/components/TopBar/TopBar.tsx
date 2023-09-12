import { useSearch } from '../../contexts/SearchContext'
import { TopBarStyled } from './TopBar.styles'
import { Search } from './Search/Search'
import { Logo } from '@/assets/Logo'

export const TOPBAR_HEIGHT = '70px'

export const TopBar = () => {
  const { searchValue, handleSearch } = useSearch()

  return (
    <TopBarStyled px={12}>
      <Logo hasText />
      <Search value={searchValue} onChange={handleSearch} />
    </TopBarStyled>
  )
}
