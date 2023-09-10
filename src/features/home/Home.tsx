import { Page, MoviesRow } from '../../components'

export const Home = () => {
  return (
    <Page hasTopBar>
      <MoviesRow list="now_playing" />
      <MoviesRow list="popular" />
    </Page>
  )
}
