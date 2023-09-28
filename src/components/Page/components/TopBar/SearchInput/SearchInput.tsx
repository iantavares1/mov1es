import {
  SearchIconWrapper,
  SearchStyled,
  StyledInput,
} from './SearchInput.styles'
import SearchIcon from '@mui/icons-material/Search'

type SearchProps = {
  value: string
  onChange: (value: string) => void
}

export const SearchInput = ({ value, onChange }: SearchProps) => {
  return (
    <SearchStyled>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        name="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchStyled>
  )
}
