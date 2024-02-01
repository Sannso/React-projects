/*
Requerimientos:
- Necesita mostrar un input para bucar la película y un botón para buscar.
- Lista las peliculas encontradas y muestra el titulo, año y poster.
- Haz que las películas se muestren en un grid responsive


Primera iteracion
- Evitar que se haga la misma busqueda dos veces seguidas.
- Haz que la busqueda se haga automaticamente al escribir.
- Evita que se haga la busqueda continuamente al escribir (debounce)
*/


/*
  Haz que la busqueda se haga automaticamente al escribir.
    - Poner un onchange al input y manejarlo con un handle input en el hook

 Evita que se haga la busqueda continuamente al escribir (debounce)
    - Usar un debounce hecho para que se ejecute algo cada si el tiempo de espera se rompe
    En el handle del input se pondria el debounce

    debouncer-> npm install just-debounce-it -E
    import debounce from 'just-debounce-it';

*/


import { Search } from "./interfaces/movieApiInterfaces";
import { MovieCard } from "./components";
import { useMovies } from "./hooks/moviesHook";

function App() {
  const { movies, handleSubmit, loading, sort, handleSort } = useMovies();

  return (
    <main className="flex flex-col items-center justify-center text-white md:max-w-3xl mx-auto my-0 w-full">
      <h1 className="text-3xl mt-20">Prueba tecnica 2</h1>

      <form
        className="form mt-10 flex items-end justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col gap-2">
          <p className="text-white">Buscar película</p>
          <input
            name="myMovie"
            className="rounded-md h-8 w-50 text-black p-1"
            type="text"
          />
        </section>

        <button
          type="submit"
          className="bg-blue-600 rounded-full h-8 pr-3 pl-3 hover:bg-yellow-600 hover:text-black"
        >
          Buscar
        </button>
      </form>

      <article className="flex gap-2 text-white font-semibold mt-5">
        <p>Ordenar por titulo: </p>
        <input type="checkbox" onChange={handleSort} checked={sort}></input>
      </article>

      {loading ? (
        <p className="text-white text-xl mt-10">Cargando peliculas...</p>
      ) : (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-10 gap-6 w-full">
          {movies &&
            movies.map((movie: Search) => {
              return (
                <MovieCard
                  key={movie.imdbID}
                  imgSrc={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  type={movie.Type}
                ></MovieCard>
              );
            })}
        </section>
      )}
    </main>
  );
}

export default App;
