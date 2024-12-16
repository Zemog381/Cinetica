export interface TVShow {
    adult : boolean,                                    // +18 ?
    backdrop_path : string,                             // Lien vers Image d'arriere-plan
    created_by : Array<Creator>,                        //
    episode_run_time : Array<Number>,                   //
    first_air_date : string,                            //
    genres : Array<Genre>                               // Genres
    homepage : string,                                  // ????
    id : Number,                                        // id
    in_production : boolean,                            // 
    languages : Array<string>                           // Langues
    last_air_date : string,                             // Dernier episode sorti
    last_episode_to_air : Episode,                      // Dernier episode sorti
    name : string                                       // Nom (langue locale)
    next_episode_to_air : Episode,
    networks : Array<Network>
    number_of_episodes : Number,
    number_of_seasons : Number,
    origin_country : Array<string>                      // Liste des pays (2 caracteres)
    original_language : string,                         // Langue
    original_name : string,                             // Titre original
    overview : string,                                  // Synopsis
    popularity : Number,                                // Popularite (jsp)
    poster_path : string,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    seasons : Array<Season>,
    spoken_languages : Array<Language>,                 // Langues
    status : string,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : string,                                   // "slogan"
    type : string                                       
    vote_average : Number,                              // Note sur 10
    vote_count : Number                                 // Nb de votes
}

export interface TVShowShort {
    backdrop_path : string,
    first_air_date : string,
    genre_ids : Array<Number>,
    id : Number,
    name : string,
    origin_country : Array<string>,
    original_language : string,
    overview : string,
    popularity : string,
    poster_path : string,
    vote_average : Number,
    vote_count : Number
}

interface Episode {
    id : Number,
    name : string,
    overview : string,
    vote_average : Number,
    vote_count : Number,
    air_date : string ,
    episode_number : Number,
    episode_type : string,
    production_code : string,
    runtime : Number,
    season_number : Number,
    show_id : Number,
    still_path : string       // Image
}

interface Network {
    id : Number,
    logo_path : string,
    name : string,
    origin_country : string
}

interface Season {
    air_date : string,
    episode_count : Number,
    id : Number,
    name : string,
    overview : string,
    poster_path : string,
    season_number : Number,
    vote_average : Number
}

interface Creator {id : Number, credit_id : string, name : string, gender : Number, profile_path : string}
interface Genre {id : Number, name : string}

interface ProductionCompany {id : Number, logo_path : string, name : string, origin_country : string}
interface Country {iso_3166_1 : string, name : string}
interface Language {english_name : string, iso_639_1 : string, name : string}
