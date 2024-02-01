import { FACT_CAT_API_URL } from "../constantes";
import { APICatFact } from "../interfaces/cats";


export const getFactCat = () =>{
    return fetch(FACT_CAT_API_URL)
      .then((res) => res.json())
      .then((data: APICatFact) => {
        return data.fact
      });
}