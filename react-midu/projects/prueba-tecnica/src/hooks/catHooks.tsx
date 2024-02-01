import { useEffect, useState } from "react";
import { getFactCat } from "../services/catServices";

export function useCatFact() {
  const [fact, setFact] = useState(String);

  const refreshCatFact = ()=>{
    getFactCat().then((data) => setFact(data));
  }

  useEffect(refreshCatFact, []);

  return {fact, refreshCatFact}
}
