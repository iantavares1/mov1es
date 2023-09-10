import { Container } from '@mui/material'

type PageContentProps = {
  children: React.ReactNode
  sx: React.CSSProperties
}

export const PageContent = ({ children, sx }: PageContentProps) => {
  return <Container sx={sx}>{children}</Container>
}
