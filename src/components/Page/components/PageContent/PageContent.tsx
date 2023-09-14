import { styled } from '@mui/material'

const PageContentStyled = styled('main')(({ theme }) => ({
  margin: `0 ${theme.size(100)}`,
  paddingBottom: theme.size(50),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.size(50),
  overflow: 'hidden',
}))

type PageContentProps = {
  children: React.ReactNode
  style: React.CSSProperties
}

export const PageContent = ({ children, style }: PageContentProps) => {
  return <PageContentStyled style={style}>{children}</PageContentStyled>
}
