export interface TVShow {
    adult : boolean,                                    // +18 ?
    backdrop_path : string,                             // Lien vers Image d'arriere-plan
    created_by : Array<Creator>,                        //
    episode_run_time : Array<number>,                   //
    first_air_date : string,                            //
    genres : Array<Genre>                               // Genres
    homepage : string,                                  // ????
    id : number,                                        // id
    in_production : boolean,                            // 
    languages : Array<string>                           // Langues
    last_air_date : string,                             // Dernier episode sorti
    last_episode_to_air : Episode,                      // Dernier episode sorti
    name : string                                       // Nom (langue locale)
    next_episode_to_air : Episode,
    networks : Array<Network>
    number_of_episodes : number,
    number_of_seasons : number,
    origin_country : Array<string>                      // Liste des pays (2 caracteres)
    original_language : string,                         // Langue
    original_name : string,                             // Titre original
    overview : string,                                  // Synopsis
    popularity : number,                                // Popularite (jsp)
    poster_path : string,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    seasons : Array<Season>,
    spoken_languages : Array<Language>,                 // Langues
    status : string,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : string,                                   // "slogan"
    type : string                                       
    vote_average : number,                              // Note sur 10
    vote_count : number                                 // Nb de votes
}

export interface TVShowShort {
    backdrop_path : string,
    first_air_date : string,
    genre_ids : Array<number>,
    id : number,
    name : string,
    origin_country : Array<string>,
    original_language : string,
    overview : string,
    popularity : string,
    poster_path : string,
    vote_average : number,
    vote_count : number
}

interface Episode {
    id : number,
    name : string,
    overview : string,
    vote_average : number,
    vote_count : number,
    air_date : string ,
    episode_number : number,
    episode_type : string,
    production_code : string,
    runtime : number,
    season_number : number,
    show_id : number,
    still_path : string       // Image
}

interface Network {
    id : number,
    logo_path : string,
    name : string,
    origin_country : string
}

interface Season {
    air_date : string,
    episode_count : number,
    id : number,
    name : string,
    overview : string,
    poster_path : string,
    season_number : number,
    vote_average : number
}

interface Creator {id : number, credit_id : string, name : string, gender : number, profile_path : string}
interface Genre {id : number, name : string}

interface ProductionCompany {id : number, logo_path : string, name : string, origin_country : string}
interface Country {iso_3166_1 : string, name : string}
interface Language {english_name : string, iso_639_1 : string, name : string}
