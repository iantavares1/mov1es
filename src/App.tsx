import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
