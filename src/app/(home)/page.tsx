import { Banner } from "@/components/Banner"
import { MovieRow } from "@/components/MovieRow/MovieRow"
import { callAPI } from "../../services/api"
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
} from "@/services/paths"
import { shuffleArray } from "@/utils/shuffleArray"
import { Movie } from "@/types"

export default async function Home() {
  const popularList: Movie[] = await callAPI(POPULAR_MOVIES).then(
    (res) => res.results
  )

  const nowPlayingList: Movie[] = await callAPI(NOW_PLAYING_MOVIES)
    .then((res) => res.results)
    .then((list) => shuffleArray(list))

  const topRatedList: Movie[] = await callAPI(TOP_RATED_MOVIES).then(
    (res) => res.results
  )

  const poster = shuffleArray(popularList.slice(0, 6))[0]

  return (
    <>
      <Banner poster={poster} />

      <div className="flex flex-col gap-6 px-6">
        <MovieRow title="Popular" movies={popularList} />

        <MovieRow title="Em alta" movies={nowPlayingList} />

        <MovieRow title="Melhor avaliados" movies={topRatedList} />
      </div>
    </>
  )
}
