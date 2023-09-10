import { TOPBAR_HEIGHT, TopBar } from './components/TopBar/TopBar'
import { SearchProvider } from './contexts/SearchContext'
import { PageContent } from './components/PageContent/PageContent'

type PageProps = {
  hasTopBar?: boolean
  children: React.ReactNode
}

export const Page = ({ hasTopBar = true, children }: PageProps) => {
  return (
    <SearchProvider>
      {hasTopBar && <TopBar />}
      <PageContent sx={{ marginTop: hasTopBar ? TOPBAR_HEIGHT : 0 }}>
        {children}
      </PageContent>
    </SearchProvider>
  )
}
