import { IMAGE_CAT_API_URL } from "./constantes";
// import { getFactCat } from "./services/catServices";
import { useCatFact } from "./hooks/catHooks"; 

// APIS:
//   Facts Random https://catfact.ninja/fact
//   Imagen random https://cataas.com/

// - Recuperar un hecho aleatorio de gatos de la primera API
// - Recuperar la primera del hecho
// - Muestra una imagen de un gato con la primera palabra.

function App() {
  const {fact, refreshCatFact} = useCatFact()
  // const [idCatImage, setIdCatImage] = useState(String);

  // Se ejecuta solo cuando se renderiza por primera vez el componente
  
  // useEffect(() => {
  //   if (fact) {
  //     const url =
  //       IMAGE_CAT_API_URL + "says/" + getFirtsWord(fact) + "?json=true";
  //     console.log(url);
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data: APICatImg) => {
  //         setIdCatImage(data._id);
  //       });
  //   }
  // }, [fact]);

  // useEffect(() => {
  //   const url = IMAGE_CAT_API_URL+idCatImage;
  //   console.log(url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data: APICatImg) => {
  //       setIdCatImage(data._id)
  //     });
  // }, [idCatImage]);

  const getFirtsWord = (frase: string) => {
    let word = frase.split(" ")[0].toLowerCase();
    if (word[word.length - 1] === ("," || ".")) {
      word = word.slice(0, word.length - 1);
    }

    return word;
  };

  const getNewCats = () => {refreshCatFact()};

  return (
    <main className="flex flex-col items-center justify-center w-full mt-16">
      <h1 className="text-white text-4xl font-bold">
        Prueba tecnica de consumo de APIS
      </h1>

      <button
        onClick={getNewCats}
        className="mt-10 text-white font-bold rounded-full bg-blue-600 p-2 pl-4 pr-4"
      >
        Obtener nuevo gato
      </button>

      {fact && (
        <section className="flex flex-col items-center mt-16 max-w-lg text-pretty text-white">
          <h2 app-cat-fact='fact' className="font-bold">{fact}</h2>

          <h3 className="mt-4">First word: {getFirtsWord(fact)}</h3>

          <img
            className="w-80 h-auto"
            src={IMAGE_CAT_API_URL + "says/" + getFirtsWord(fact)}
            alt="Imagen de gato"
          />
        </section>
      )}
    </main>
  );
}

export default App;
