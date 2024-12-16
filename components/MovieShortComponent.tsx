'use client'

import { MovieShort } from "@/app/entities/Movie";
import { useRouter } from "next/navigation";

export const MovieShortComponent = ({movie} : {movie : MovieShort}) => {
    const posterUrl = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
    const router = useRouter();
    return ( <>
    <div className="m-2 w-[185px] h-[278px] shrink-0 bg-no-repeat bg-cover" style={{backgroundImage:"url("+posterUrl+")"}} onClick={()=>router.push("/movies/"+movie.id)}>
    <div className="group relative w-[185px] h-[278px] hover:bg-gradient-to-b from-black from-15%">
    <p className="hidden group-hover:block text-center text-gray-300">{movie.title}</p>
    </div>
    </div>
    </>
    )
}