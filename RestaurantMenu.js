import {useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams} from "react-router-dom";
import useRestarauntMenu from "./useRestaurantMenu";
import { CDN_URL, MENU_API } from "../utils/consonants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>{

const {resId} = useParams();
const resInfo = useRestarauntMenu(resId);  
    const [showIndex ,setShowIndex]= useState(1);
    if (resInfo === null) return <Shimmer/>;

const {text} = resInfo?.cards[0]?.card?.card;
const { title}=resInfo?.cards[1]?.card?.card?.tabs[0];
//const { id}=resInfo?.cards[1]?.card?.card?.tabs[1];
//const  {item} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
const {name,cuisines,areaName,avgRating,costForTwoMessage,} = resInfo?.cards[2]?.card?.card?.info;
const  {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//console.log("xyz", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]
  =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );


return(
    <div className="resdetails  text-center ">
<h2 className=" font-bold text-2xl my-6 ">{text}</h2>
    
    <div className="order  flex ms-96 m-3 border-b-2 border-solid border-gray-200 w-[700px]">
        <h3 className="online mr-4 border-b-4 border-solid rounded-sm border-orange-500">{title }</h3><h3 className="dine">    DineOut</h3> 
    </div>
        <div className="Menu-card m-3 mb-16 p-3 border border-solid border-gray-400 w-[700px] ms-96  text-left pl-4 rounded-2xl shadow-xl">
            <div className="menu ">
  <h2>{name}</h2>
<h3 className="font-bold">{avgRating}ratings   <span>Rs.{costForTwoMessage}</span> </h3>
<h4 className="cuisine text-orange-600 border-b-2 border-solid border-orange-600 w-52">{cuisines.join(", ")}</h4>
<h5>50min</h5>
</div>
</div>


{categories.map((category,index)=>(
    //controlled component
  <RestaurantCategory 
   key={category?.card?.card.title}
   data={category?.card?.card}
   showItems={index === showIndex ? true : false }
   setShowIndex={()=>setShowIndex(index)}
   />
))}


       

        </div>

    );
};
export default RestaurantMenu;          