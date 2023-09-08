import { Box, Typography } from '@mui/material'

type MovieCardProps = {
  title: string
  imageUrl: string
}

export const MovieCard = ({ title, imageUrl }: MovieCardProps) => {
  return (
    <Box>
      <img
        width={300}
        src={imageUrl}
        alt={title}
        style={{ borderRadius: 10 }}
      />
      <Typography variant="h3">{title}</Typography>
    </Box>
  )
}
