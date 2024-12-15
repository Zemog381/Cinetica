import { TVShowShort } from '@/app/entities/TVShow'
import { headers } from 'next/headers'
import { TVShowShortComponent } from '@/components/TVShowShortComponent';

interface TVSResponse {
    page : Number,
    results : Array<TVShowShort>,
    total_pages : Number,
    total_results : Number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/shows/on-the-air",{method:"GET"}));
    const apiResJSON = await apiRes.json() as TVSResponse;
    const showList = apiResJSON.results;
    return (
    <> 
    <div>
        <p className="text-center">Now Playing</p>
        <div className="flex flex-row flex-wrap">
            {showList.map((s) => (<TVShowShortComponent tvshow={s}/>))}
        </div>
    </div>
    </>
    );
  }
