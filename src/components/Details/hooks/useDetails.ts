import { useEffect, useState } from 'react'
import { CastData, CrewData, MovieDetails } from '@/types'
import { getMovieCredits, getMovieDetails } from '@/services/api'

export const useDetails = (movieId: number) => {
  const [details, setDetails] = useState<MovieDetails | null>(null)
  const [cast, setCast] = useState<CastData[]>([])
  const [crew, setCrew] = useState<CrewData[]>([])

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieDetails(Number(movieId))
      setDetails(response)
    }
    fetchMovie()
  }, [movieId])

  useEffect(() => {
    const getCredits = async () => {
      const response = await getMovieCredits(Number(movieId))
      setCrew(response.crew)
      setCast(response.cast)
    }

    getCredits()
  }, [details, movieId])

  return {
    details,
    cast,
    crew,
  }
}
