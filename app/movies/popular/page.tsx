import { MovieShort } from '@/app/entities/Movie'
import { headers } from 'next/headers'

interface popularMoviesResponse {
    page : Number,
    results : Array<MovieShort>,
    total_pages : Number,
    total_results : Number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/movies/popular",{method:"GET"}));
    const apiResJSON = await apiRes.json() as popularMoviesResponse;
    const movieList = apiResJSON.results;
    return (
    <> 
    <div>Popular</div>
    <p>Movie 1 ; {JSON.stringify(movieList[1])}</p>
    <p>Data : {JSON.stringify(apiResJSON)}</p>
    </>
    );
  }