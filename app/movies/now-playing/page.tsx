import { MovieShort } from '@/app/entities/Movie'
import { MovieShortComponent } from '@/components/MovieShortComponent'
import { headers } from 'next/headers'

interface nowPlayingResponse {
    dates : {
        maximum : string,
        minimum : string
    }
    page : number,
    results : Array<MovieShort>,
    total_pages : number,
    total_results : number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/movies/now-playing",{method:"GET"}));
    const apiResJSON = await apiRes.json() as nowPlayingResponse;
    const movieList = apiResJSON.results;
    return (
    <> 
    <div>
        <p className="text-center">Now Playing</p>
        <div className="flex flex-row flex-wrap">
            {movieList.map((m) => (
                <MovieShortComponent key={m.id} movie={m} />
            ))}
        </div>
    </div>
    </>
    );
  }

