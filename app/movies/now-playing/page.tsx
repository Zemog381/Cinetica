import { MovieShort } from '@/app/entities/Movie'
import { headers } from 'next/headers'

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/movies/now-playing",{method:"GET"}));
    const apiResJSON = await apiRes.json() as nowPlayingResponse;
    const movieList = apiResJSON.results;
    return (
    <> 
    <div>Now Playing</div>
    <p>Movie 1 ; {JSON.stringify(movieList[1])}</p>
    <p>Data : {JSON.stringify(apiResJSON)}</p>
    </>
    );
  }

interface nowPlayingResponse {
    dates : {
        maximum : String,
        minimum : String
    }
    page : Number,
    results : Array<MovieShort>,
    total_pages : Number,
    total_results : Number
}