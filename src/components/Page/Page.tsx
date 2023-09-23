import { SearchProvider } from './contexts/SearchContext'
import { Outlet } from 'react-router-dom'
import { TOPBAR_HEIGHT, TopBar } from './components/TopBar/TopBar'
import { PageContent } from './components/PageContent/PageContent'
import { Footer } from './components/Footer/Footer'

type PageProps = {
  hasTopBar?: boolean
}

export const Page = ({ hasTopBar = true }: PageProps) => {
  return (
    <SearchProvider>
      {hasTopBar && <TopBar />}
      <PageContent style={{ marginTop: hasTopBar ? TOPBAR_HEIGHT : 0 }}>
        <Outlet />
      </PageContent>
      <Footer />
    </SearchProvider>
  )
}
