import { Banner } from "@/components/Banner"
import { MovieRow } from "@/components/MovieRow/MovieRow"
import { Movie } from "@/types/Movie"
import { shuffleArray } from "@/utils/shuffleArray"
import { callAPI } from "../services/api"

export default async function Home() {
  const popularList: Movie[] = await callAPI(
    `https://api.themoviedb.org/3/movie/popular`
  )

  const nowPlayingList: Movie[] = await callAPI(
    `https://api.themoviedb.org/3/movie/now_playing`
  ).then((list) => shuffleArray(list))

  const topRatedList: Movie[] = await callAPI(
    `https://api.themoviedb.org/3/movie/top_rated`
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
