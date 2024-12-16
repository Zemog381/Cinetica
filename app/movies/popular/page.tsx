import { MovieShort } from '@/app/entities/Movie'
import { MovieShortComponent } from '@/components/MovieShortComponent';
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
    <div>
        <p className="text-center">Popular</p>
        <div className="flex flex-row flex-wrap">
            {movieList.map((m) => (<MovieShortComponent movie={m}/>))}
        </div>
    </div>
    </>
    );
  }