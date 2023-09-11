import { createTheme } from '@mui/material'

const REM_SIZE = 16
const REM_OFFSET = 0.6
const PX_OFFSET = 0.4
interface CustomTheme {
  size: (size: number, unit?: 'rem' | 'px') => string
  fontSize: (size: number, unit?: 'rem' | 'px') => string
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({
  palette: {
    text: {
      primary: '#fff',
    },
    background: {
      default: '#03000f',
      paper: '#0a0329',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  size: (size, unit = 'rem') =>
    `calc(${(size / REM_SIZE) * REM_OFFSET}${unit} + ${size * PX_OFFSET}px)`,
  fontSize: (size, unit = 'rem') => `${size / REM_SIZE}${unit}`,
})
