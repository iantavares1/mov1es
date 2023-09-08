import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { Home } from './features/home/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
