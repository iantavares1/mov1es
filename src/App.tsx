import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
