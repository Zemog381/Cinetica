import { MovieShort } from '@/app/entities/Movie'
import { MovieShortComponent } from '@/components/MovieShortComponent';
import { headers } from 'next/headers'

interface topRatedMoviesResponse {
    page : number,
    results : Array<MovieShort>,
    total_pages : number,
    total_results : number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/movies/top-rated",{method:"GET"}));
    const apiResJSON = await apiRes.json() as topRatedMoviesResponse;
    const movieList = apiResJSON.results;
    return (
    <> 
    <div>
        <p className="text-center">Top rated</p>
        <div className="flex flex-row flex-wrap">
            {movieList.map((m) => (<MovieShortComponent movie={m}/>))}
        </div>
    </div>
    </>
    );
  }