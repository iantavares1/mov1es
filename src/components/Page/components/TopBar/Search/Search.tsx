import { SearchIconWrapper, SearchStyled, StyledInput } from './Search.styles'
import SearchIcon from '@mui/icons-material/Search'

type SearchProps = {
  value: string
  onChange: (value: string) => void
}

export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <SearchStyled>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchStyled>
  )
}
