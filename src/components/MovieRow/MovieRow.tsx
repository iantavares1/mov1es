"use client"

import { useMovieRow } from "./hooks/useMovieRow"
import { MovieCard } from "../MovieCard"
import { NavigationButton } from "./components/NavigationButton"
import { Movie } from "@/types"

export function MovieRow({
  movies,
  title,
}: {
  movies: Movie[]
  title?: string
}) {
  const { rowRef, handleRowNavigation } = useMovieRow()

  return (
    <div className="relative w-full">
      <NavigationButton direction="left" onNavigation={handleRowNavigation} />

      {title && <h1 className="mb-2">{title}</h1>}

      <div
        ref={rowRef}
        className="flex gap-2 overflow-y-hidden overflow-x-scroll md:overflow-x-hidden"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <NavigationButton direction="right" onNavigation={handleRowNavigation} />
    </div>
  )
}
