import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
//setShowItems(!showItems);
setShowIndex();
    };
    return (
    <>
    <div className="m-auto mt-5 w-6/12 my-4 shadow-lg p-4 bg-gray-50  ">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
<span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
 <span>{showItems ? "∧":"∨"}</span> 
    </div>
{  showItems &&  <ItemList items={data.itemCards}/>
}    </div>
    {/* { Accordion body} */}
    </>
);
}
export default RestaurantCategory;