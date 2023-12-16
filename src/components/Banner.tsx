import { Movie } from "@/types/Movie"
import Image from "next/image"

export function Banner({ poster }: { poster: Movie }) {
  return (
    <div className="mb-3">
      <Image
        alt={`poster de  ${poster.title}`}
        src={`https://image.tmdb.org/t/p/original${poster.backdrop_path}`}
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/original${poster.backdrop_path}`}
        priority
        width={0}
        height={0}
        sizes="100"
        style={{ width: "100%" }}
      />
    </div>
  )
}
