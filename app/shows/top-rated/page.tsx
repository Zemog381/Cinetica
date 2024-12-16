import { TVShowShort } from '@/app/entities/TVShow'
import { TVShowShortComponent } from '@/components/TVShowShortComponent';
import { headers } from 'next/headers'

interface TVSResponse {
    page : number,
    results : Array<TVShowShort>,
    total_pages : number,
    total_results : number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/shows/top-rated",{method:"GET"}));
    const apiResJSON = await apiRes.json() as TVSResponse;
    const showList = apiResJSON.results;
    return (
    <> 
    <div>
        <p className="text-center">top rated</p>
        <div className="flex flex-row flex-wrap">
            {showList.map((s) => (<TVShowShortComponent tvshow={s}/>))}
        </div>
    </div>
    </>
    );
  }
