import { useEffect, useState } from "react"
import { callAPI } from "./api"

type FetchData<T> = {
  data: T | null
  isLoading: boolean
  error: string
}

export function useFetch<T>(url: string): FetchData<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setData(null)
    setError("")

    callAPI(url)
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        setError("Something wrong")
      })
  }, [url])

  return { data, isLoading, error }
}
