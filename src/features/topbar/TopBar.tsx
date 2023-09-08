import { Box, useTheme } from '@mui/material'

export const TopBar = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: 100,
        width: '100vw',
        background: theme.palette.background.default,
        opacity: 0.6,
      }}
      position={'fixed'}
      top={0}
      left={0}
    >
      <form action="search"></form>
    </Box>
  )
}
