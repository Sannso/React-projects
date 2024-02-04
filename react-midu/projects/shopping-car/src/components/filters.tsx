import { useContext, useId } from "react"
import { FilterContext } from "../appContext"

export function Filters(){

    const {filters, setFilters} = useContext(FilterContext)

    const filterCaregoriesID = useId()
    const filterPriceID = useId()

    const handleCategories = (event:(React.ChangeEvent<HTMLSelectElement>)) =>{
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }
    
    const handlePrice = (event:(React.ChangeEvent<HTMLInputElement>)) =>{
        setFilters(prevState => ({
            ...prevState,
            price: parseInt(event.target.value)
        }))
    }

    return (
        <section className="form flex w-full justify-end gap-4 font-medium mt-3 p-4 px-10">
          <label htmlFor={filterCaregoriesID} className="text-white">Filtrar por categoria:</label>
          <select onChange={handleCategories} id={filterCaregoriesID}>
            <option value="all">Todo</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>

          <label htmlFor={filterPriceID} className="text-white">Filtrar por precio:</label>
          <input className="w-24" type="range" id={filterPriceID} value={filters.price} min={0} max={1000} onChange={handlePrice}/>
          <label htmlFor={filterPriceID} className="text-white font-medium w-3">{filters.price}</label>
        </section>
    )
}