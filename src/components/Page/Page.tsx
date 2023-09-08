import { Container } from '@mui/material'
import { TopBar } from '../../features/topbar/TopBar'

type PageProps = {
  hasTopBar?: boolean
  children: React.ReactNode
}

export const Page = ({ hasTopBar = true, children }: PageProps) => {
  return (
    <>
      {hasTopBar && <TopBar />}
      <Container sx={{ mt: hasTopBar ? 10 : 0 }}>{children}</Container>
    </>
  )
}
