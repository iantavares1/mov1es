import { Carrousel } from "./Carrousel"
import { MovieCard } from "./MovieCard/MovieCard"
import { Movie } from "@/types"

export function MovieRow({
  movies,
  title,
}: {
  movies: Movie[]
  title?: string
}) {
  return (
    <div className="relative w-full">
      {title && (
        <h1 className="mb-100 sm:text-[22px] lg:text-[28px]">{title}</h1>
      )}

      <Carrousel>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carrousel>
    </div>
  )
}
