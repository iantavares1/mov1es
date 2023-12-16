import { Movie } from "@/types/Movie"
import noImage from "../../public/no-image.svg"
import Image from "next/image"
import { StarOutlined } from "@mui/icons-material"

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      key={movie.id}
      className="relative flex h-[200px] w-[100px] transform cursor-pointer flex-col gap-1  transition duration-200 hover:scale-105"
    >
      <Image
        src={
          movie?.poster_path !== ""
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : noImage
        }
        alt={`${movie.title}-poster}`}
        width={0}
        height={0}
        sizes="100"
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      {/* <span className="absolute right-0.5 top-0.5">
        <FavoriteBorderOutlined />
      </span> */}

      <div className="flex flex-col items-start text-lg font-bold">
        <span className="w-[12ch] truncate text-xs">
          {movie.title === undefined ? movie.name : movie.title}
        </span>

        <div className="flex items-center gap-1 text-xs">
          <StarOutlined className="text-amber-500" />

          {movie?.vote_average?.toFixed(1)}
        </div>
      </div>
    </div>
  )
}
