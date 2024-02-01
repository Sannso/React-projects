export type APIMovies = {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export type Search = {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}
