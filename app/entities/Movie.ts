export interface Movie {
    adult : boolean,                                    // +18 ?
    backdrop_path : string,                             // Lien vers Image d'arriere-plan
    belongs_to_collection : Collection,                 // Collection de films
    budget : Number,                                    // budget
    genres : Array<Genre>                               // Genres
    homepage : string,                                  // ????
    id : Number,                                        // id
    imdb_id : string,                                   // id imdb
    origin_country : Array<string>                      // Liste des pays (2 caracteres)
    original_language : string,                         // Langue
    original_title : string,                            // Titre original
    overview : string,                                  // Synopsis
    popularity : Number,                                // Popularite (jsp)
    poster_path : string,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    release_date : string,                              // Date de sortie
    revenue : Number,                                   // en dollar
    runtime : Number,                                   // Minutes
    spoken_languages : Array<Language>,                 // Langues
    status : string,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : string,                                   // "slogan"
    title : string,                                     // Titre
    video : boolean,                                    // hein?
    vote_average : Number,                              // Note sur 10
    vote_count : Number                                 // Nb de votes
}

export interface MovieShort {
    adult : boolean,
    backdrop_path : string,
    genre_ids : Array<Number>,
    id : Number,
    original_language : string,
    original_title : string,
    overview : string,
    popularity : string,
    poster_path : string,
    release_date : string,
    title : string,
    video : boolean,
    vote_average : Number,
    vote_count : Number
}

interface Genre {id : Number, name : string}
interface ProductionCompany {id : Number, logo_path : string, name : string, origin_country : string}
interface Country {iso_3166_1 : string, name : string}
interface Language {english_name : string, iso_639_1 : string, name : string}
interface Collection {id : Number, name : string, poster_path : string; backdrop_path : string}