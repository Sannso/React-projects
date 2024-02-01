import { useRef, useState } from "react";
import { Search } from "../interfaces/movieApiInterfaces";
import { getMoviesByTitle } from "../services/apiMovieServices";

export function useMovies() {
  const [movies, setMovies] = useState(Array<Search>);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState(false);
  const previousSearch = useRef("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { myMovie } = Object.fromEntries(new window.FormData(event.target));

    if (previousSearch.current === myMovie)
      return;
    else previousSearch.current = myMovie.toString();

    try {
      setLoading(true);
      setError(null);
      if (myMovie != "") {
        const newMovies = await getMoviesByTitle(myMovie.toString());
        setMovies(newMovies);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.messege);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = () => {
    setSort(!sort)
  }

  const sortMovies = () => {
    if(sort){
      return [...movies].sort((a, b)=> a.Title.localeCompare(b.Title))
    }
    else{
      return movies
    }
  }

  return { movies: sortMovies(), handleSubmit, loading, error, sort, handleSort };
}
