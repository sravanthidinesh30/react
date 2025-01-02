import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/consonants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=> {


  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlinestatus();
// if no dependency array ==> useEffect is called on every render
// if dependency array is empty =[]==> useEffect is called on initial render(just once)   

const {loggedInUser} = useContext(UserContext);


//subscribing to the store using a Selector
 const cartItems=  useSelector ((store)=>store.cart.items);
 console.log(cartItems
 );

return(
      <div className="flex bg-yellow-300 justify-between">
        <div className="logo-container ">
  <img className="w-40" src={LOGO_URL} />
   </div>
        <div className="nav-items items-center ">
          <ul className="flex p-6 m-6 text-lg">
            <li className="px-4   hover:text-blue-500 ">Online status:{onlineStatus?"online":"offline"}</li>
            <li className="px-4  hover:text-blue-500 "><Link to="/">Home</Link></li>
          <li className="px-4  hover:text-blue-500"><Link to="/about">About</Link></li>  
           <li className="px-4  hover:text-blue-500"><Link to="/contact">contact</Link></li> 
           <li className="px-4  hover:text-blue-500">
            <Link to="/grocery">grocery</Link></li> 

            <li className="px-4" >Gallery</li>
  
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">🛒cart({cartItems.length } items) </Link>
            </li>
  <button className="login" onClick={()=>{btnName === "Login" ?
     setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
      <li className="px-4 font-bold"> {loggedInUser}
         </li> 
          </ul>
  
        </div>
      </div>
    );
  };
  export default Header;