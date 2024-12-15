export interface TVShow {
    adult : Boolean,                                    // +18 ?
    backdrop_path : String,                             // Lien vers Image d'arriere-plan
    created_by : Array<Creator>,                        //
    episode_run_time : Array<Number>,                   //
    first_air_date : String,                            //
    genres : Array<Genre>                               // Genres
    homepage : String,                                  // ????
    id : Number,                                        // id
    in_production : Boolean,                            // 
    languages : Array<String>                           // Langues
    last_air_date : String,                             // Dernier episode sorti
    last_episode_to_air : Episode,                      // Dernier episode sorti
    name : String                                       // Nom (langue locale)
    next_episode_to_air : Episode,
    networks : Array<Network>
    number_of_episodes : Number,
    number_of_seasons : Number,
    origin_country : Array<String>                      // Liste des pays (2 caracteres)
    original_language : String,                         // Langue
    original_name : String,                             // Titre original
    overview : String,                                  // Synopsis
    popularity : Number,                                // Popularite (jsp)
    poster_path : String,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    seasons : Array<Season>,
    spoken_languages : Array<Language>,                 // Langues
    status : String,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : String,                                   // "slogan"
    type : String                                       
    vote_average : Number,                              // Note sur 10
    vote_count : Number                                 // Nb de votes
}

export interface TVShowShort {
    backdrop_path : String,
    first_air_date : String,
    genre_ids : Array<Number>,
    id : Number,
    name : String,
    origin_country : Array<String>,
    original_language : String,
    overview : String,
    popularity : String,
    poster_path : String,
    vote_average : Number,
    vote_count : Number
}

interface Episode {
    id : Number,
    name : String,
    overview : String,
    vote_average : Number,
    vote_count : Number,
    air_date : String ,
    episode_number : Number,
    episode_type : String,
    production_code : String,
    runtime : Number,
    season_number : Number,
    show_id : Number,
    still_path : String       // Image
}

interface Network {
    id : Number,
    logo_path : String,
    name : String,
    origin_country : String
}

interface Season {
    air_date : String,
    episode_count : Number,
    id : Number,
    name : String,
    overview : String,
    poster_path : String,
    season_number : Number,
    vote_average : Number
}

interface Creator {id : Number, credit_id : String, name : String, gender : Number, profile_path : String}
interface Genre {id : Number, name : String}

interface ProductionCompany {id : Number, logo_path : String, name : String, origin_country : String}
interface Country {iso_3166_1 : String, name : String}
interface Language {english_name : String, iso_639_1 : String, name : String}
