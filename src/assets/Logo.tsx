import { Box, Typography } from '@mui/material'

type LogoProps = {
  hasText?: boolean
  size?: number
  onClick?: () => void
}

export const Logo = ({ hasText = false, size = 0.8, onClick }: LogoProps) => {
  return (
    <Box
      onClick={onClick}
      display={'flex'}
      alignItems={'center'}
      gap={1}
      sx={{ zoom: size, cursor: onClick && 'pointer' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5_2)">
          <path
            d="M36 8L40 16H34L30 8H26L30 16H24L20 8H16L20 16H14L10 8H8C5.79 8 4.02 9.79 4.02 12L4 36C4 38.21 5.79 40 8 40H40C42.21 40 44 38.21 44 36V8H36Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {hasText && (
        <Typography variant="h4" fontWeight={600}>
          MoviesApp
        </Typography>
      )}
    </Box>
  )
}
