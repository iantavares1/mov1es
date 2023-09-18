import { Box } from '@mui/material'

import {
  Swiper as SwiperReact,
  SwiperProps as SwiperPropsReact,
} from 'swiper/react'
import 'swiper/css'

type SwiperProps = {
  children: React.ReactNode
  color?: string
  settings?: SwiperPropsReact
}

export const Swiper = ({
  children,
  color = 'white',
  settings,
}: SwiperProps) => {
  return (
    <Box
      sx={{
        '& .swiper-pagination-bullet-active': {
          background: color,
        },
        '& .swiper-button-next, & .swiper-button-prev': {
          color,
        },
        '& .swiper-button-disabled': {
          display: 'none',
        },
      }}
    >
      <SwiperReact {...settings}>{children}</SwiperReact>
    </Box>
  )
}
