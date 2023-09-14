import { useSearch } from '../../contexts/SearchContext'
import { Box, styled } from '@mui/material'
import { Search } from './Search/Search'
import { Logo } from '@/assets/Logo'

export const TOPBAR_HEIGHT = '70px'

const TopBarStyled = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
  height: TOPBAR_HEIGHT,
  width: '100vw',
  padding: `0 ${theme.size(100)}`,
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const TopBar = () => {
  const { searchValue, handleSearch } = useSearch()
  return (
    <TopBarStyled>
      <Logo hasText />
      <Search value={searchValue} onChange={handleSearch} />
    </TopBarStyled>
  )
}
