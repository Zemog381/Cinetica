import { MovieShort } from '@/app/entities/Movie'
import { headers } from 'next/headers'

interface topRatedMoviesResponse {
    page : Number,
    results : Array<MovieShort>,
    total_pages : Number,
    total_results : Number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/movies/top-rated",{method:"GET"}));
    const apiResJSON = await apiRes.json() as topRatedMoviesResponse;
    const movieList = apiResJSON.results;
    return (
    <> 
    <div>Top Rated</div>
    <p>Movie 1 ; {JSON.stringify(movieList[1])}</p>
    <p>Data : {JSON.stringify(apiResJSON)}</p>
    </>
    );
  }