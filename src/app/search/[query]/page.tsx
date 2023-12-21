"use client"

import { MovieCard } from "@/components/MovieCard"
import { callAPI } from "@/services/api"
import { SEARCH_MOVIE } from "@/services/paths"
import { Movie } from "@/types"
import { useQuery } from "@tanstack/react-query"

export default function Search({
  params: { query },
}: {
  params: { query: string }
}) {
  const { data, isLoading } = useQuery<{ results: Movie[] }>({
    queryKey: ["movies", query],
    queryFn: () => callAPI(SEARCH_MOVIE(query)),
  })
  const movies = data?.results

  if (isLoading) return <div className="px-300 pt-1000">Loading...</div>

  if (!movies || movies.length < 1)
    return <div className="px-300 pt-1000">Nenhum filme encontrado</div>

  return (
    <div className="px-300 pt-1000">
      <h1 className="mb-300">{`resultados de "${query}"`}</h1>

      <div className="grid grid-cols-100 gap-200 ">
        {movies
          .filter((movie) => movie.poster_path && movie.backdrop_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  )
}
