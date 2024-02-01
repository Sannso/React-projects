import { Type } from "./interfaces/movieApiInterfaces";

export function MovieCard({
  imgSrc,
  title,
  year,
  type,
}: {
  imgSrc: string;
  title: string;
  year: string;
  type: Type;
}) {
  return (
    <article className="flex flex-col w-52 h-[410px] bg-slate-900 rounded-xl mx-auto my-0">
      <img className="w-fit h-auto rounded-t-xl" src={imgSrc} alt="Portada de la pelicula" />
      <section className="flex flex-col justify-between text-white h-full pl-4 pr-4 pb-5">
        <header className="font-bold text-md mt-1 text-ellipsis line-clamp-2">{title}</header>
        <section className="flex justify-between items-center mt-2">
          <p className="text-sm">{year}</p>
          <aside className="flex place-content-center text-white p-0.6 pr-2 pl-2 bg-amber-700 rounded-lg">
            <p className="font-bold text-sm">{type}</p>
          </aside>
        </section>
      </section>
    </article>
  );
}
