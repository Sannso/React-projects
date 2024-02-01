import { API_KEY, API_URL } from "../constans";
import { APIMovies } from "../interfaces/movieApiInterfaces";

export async function getMoviesByTitle(title: string) {
  const url = API_URL + "?s=" + title + "&apikey=" + API_KEY;

  const res = await fetch(url);
  const data:APIMovies = await res.json();
  return data.Search;
}
