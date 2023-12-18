type Genre = { id: number; name: string }

export type CrewData = {
  id: number
  known_for_department: string
  name: string
  original_name: string
  profile_path: string | null
  job: string
  department: string
}

export type CastData = Omit<CrewData, "job" | "department"> & {
  character: string
}

export type Movie = {
  id: number
  title: string
  name: string
  poster_path: string
  backdrop_path: string
  vote_average: number
}

export type MovieDetails = {
  backdrop_path: string
  genres: Genre[]
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: 7.312
  vote_count: 4708
}
