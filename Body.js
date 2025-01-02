import Foodcards ,{withPromotedLabel}from "./Foodcards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listRes, setResList] = useState([]);
  const [filteredRestaurant, setFilteredrestaurant] = useState([]);
  const [searchtext, setSearchtext] = useState("");
const RestaurantCardPromoted = withPromotedLabel(Foodcards);

//whenever state variable update, react triggrs a reconcilaition cycle(rerender the component)
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log( json);
      // const restaurants = json?.data?.card;
      // console.log("Extracted Restaurants Data:", restaurants);
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      restaurants.forEach(res => {
        res.info.promoted = res.info.avgRating && res.info.avgRating > 4.5;
      });
      setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
    
  };

const onlineStatus=useOnlinestatus();
if(onlineStatus === false )return (<h1>your are  Offline!!!</h1>);
  // Search and filter functionality remains the same...


 const {loggedInUser,setUserName}= useContext(UserContext);
 
 return listRes.length === 0 ?(<Shimmer/>) :(
   
  
  <div className="body">
  
<div className="filter flex bg-slate-100">
<div className="search m-2 p-2 ">
      <input 
      type="text"
       className="search-btn border border-solid border-black" 
       value={searchtext} 
       onChange={(e)=>{setSearchtext(e.target.value);

       }}
     />
<button className="px-3 py-1 bg-slate-300 m-3 rounded-lg "
 onClick={()=>{
  //filter the restaurant carda and update the ui
  //searchText
  console.log(searchtext)
  const filteredRestaurant = listRes.filter(
    (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
  setFilteredrestaurant(filteredRestaurant);
}}>search</button>
      </div>

<div className="flex items-center p-2 m-2">
<button className="filter-btn px-3 py-1 bg-slate-300 rounded-lg"
  onClick={()=>{
    const filteredList= listRes.filter(
      (res) =>res.info.avgRating > 4.5
    );
    setResList(filteredList);
  }}
 >
    Top Rated restaurants
  </button>
</div>
<div className="m-2 p-2 flex items-center">
<label>UserName: </label>
<input className="border border-black p-1"
value={loggedInUser}
   onChange={(e)=>setUserName(e.target.value )}/>
</div>
  
</div>

    <div className="food-container flex flex-wrap">
      {filteredRestaurant.map((restaurant) =>(
      <Link key={restaurant.info.id} to={"restaurants/"+ restaurant.info.id}  >
        {
        restaurant.info.promoted ?(<RestaurantCardPromoted resData={restaurant}/>):( <Foodcards  resData={restaurant}/>
        ) }
</Link>  
      ))}
    </div>
  </div>
  );
};

export default Body;
