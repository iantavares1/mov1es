import { useEffect, useState } from 'react'
import { CastData, CrewData, Movie, MovieDetails } from '@/types'
import {
  getMovieCredits,
  getMovieDetails,
  getMovieRecommendations,
} from '@/services/api'

export const useDetails = (movieId: number) => {
  const [details, setDetails] = useState<MovieDetails | null>(null)
  const [cast, setCast] = useState<CastData[]>([])
  const [crew, setCrew] = useState<CrewData[]>([])
  const [recommendations, setRecommendations] = useState<Movie[]>([])

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }
    scrollToTop()

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
    const getRecommendations = async () => {
      const response = await getMovieRecommendations(Number(movieId))
      setRecommendations(response.results)
    }
    getCredits()
    getRecommendations()
  }, [details, movieId])

  return {
    details,
    cast,
    crew,
    recommendations,
  }
}
