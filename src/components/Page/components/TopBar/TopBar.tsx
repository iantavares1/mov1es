import { useSearchContext } from '../../contexts/SearchContext'
import { useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { SearchInput } from './SearchInput/SearchInput'
import { Logo } from '@/assets/Logo'

export const TOPBAR_HEIGHT = '70px'

const TopBarStyled = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
  height: TOPBAR_HEIGHT,
  width: '100%',
  padding: `0 ${theme.size(100)}`,
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const TopBar = () => {
  const navigate = useNavigate()
  const { searchValue, handleSearch } = useSearchContext()

  return (
    <TopBarStyled>
      <Logo
        hasText
        onClick={() => {
          navigate('/')
          handleSearch('')
        }}
      />
      <SearchInput value={searchValue} onChange={handleSearch} />
    </TopBarStyled>
  )
}
