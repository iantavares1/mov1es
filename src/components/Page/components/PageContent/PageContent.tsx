import { styled } from '@mui/material'

const PageContentStyled = styled('main')(({ theme }) => ({
  paddingBottom: theme.spacing(12),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(10),
  overflow: 'hidden',
}))

type PageContentProps = {
  children: React.ReactNode
  sx: React.CSSProperties
}

export const PageContent = ({ children, sx }: PageContentProps) => {
  return <PageContentStyled sx={sx}>{children}</PageContentStyled>
}
