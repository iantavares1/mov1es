import { useEffect, useRef } from 'react'

type InfiniteScrollProps = {
  loadMore: () => void
}

export const InfiniteScroll = ({ loadMore }: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          loadMore()
        }
      }, options)
      observer.observe(containerRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return <div ref={containerRef} />
}
