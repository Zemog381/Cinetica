export interface Movie {
    adult : Boolean,                                    // +18 ?
    backdrop_path : String,                             // Lien vers Image d'arriere-plan
    belongs_to_collection : Collection,                 // Collection de films
    budget : Number,                                    // budget
    genres : Array<Genre>                               // Genres
    homepage : String,                                  // ????
    id : Number,                                        // id
    imdb_id : String,                                   // id imdb
    origin_country : Array<String>                      // Liste des pays (2 caracteres)
    original_language : String,                         // Langue
    original_title : String,                            // Titre original
    overview : String,                                  // Synopsis
    popularity : Number,                                // Popularite (jsp)
    poster_path : String,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    release_date : String,                              // Date de sortie
    revenue : Number,                                   // en dollar
    runtime : Number,                                   // Minutes
    spoken_languages : Array<Language>,                 // Langues
    status : String,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : String,                                   // "slogan"
    title : String,                                     // Titre
    video : Boolean,                                    // hein?
    vote_average : Number,                              // Note sur 10
    vote_count : Number                                 // Nb de votes
}

interface Genre {id : Number, name : String}
interface ProductionCompany {id : Number, logo_path : String, name : String, origin_country : String}
interface Country {iso_3166_1 : String, name : String}
interface Language {english_name : String, iso_639_1 : String, name : String}
interface Collection {id : Number, name : String, poster_path : String; backdrop_path : String}