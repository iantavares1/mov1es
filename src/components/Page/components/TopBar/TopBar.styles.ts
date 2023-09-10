import { Box, styled } from '@mui/material'
import { TOPBAR_HEIGHT } from './TopBar'

export const TopBarStyled = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: TOPBAR_HEIGHT,
  width: '100vw',
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
