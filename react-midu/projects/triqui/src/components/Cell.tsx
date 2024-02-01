import { useState } from "react";

export function Cell({index, children, updateTable}:{index:number, children:string, updateTable:(index:number)=>void}) {
  const [cellOption, setCellOption] = useState("");

  const handleCell = ()=>{
    if(cellOption === "" && children != ""){
        setCellOption(children)
        updateTable(index)
    }
  }

  return (
    <div className="
    rounded-md bg-transparent p-4 text-white border-2 
    border-solid border-green-700 w-16 h-16 text-center
     text-2xl " onClick={handleCell}>
      {cellOption}
    </div>
  );
}
