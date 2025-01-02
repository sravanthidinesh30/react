import { useDispatch } from "react-redux";
import { CDN_URL, MENU_API } from "../utils/consonants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemList =({items ,onRemoveItem})=>{
  const dispatch= useDispatch();
const navigate =useNavigate();
  const [showCartBtn, setShowCartBtn]  = useState(false);
const cartItems=useSelector((store)=>store.cart.items);

const handleAddItem=( item  )=>{

// Dispatch an action
dispatch(addItem(item));
setShowCartBtn(true);
};

return(
  <>
    <div>
        
      
            {items.map((item) => (
              <div className=" border-b-2 border-solid border-gray-200 pb-3 pt-3  flex items-center justify-between" key={item.card.info.id}>
   <div className=" text-left w-9/12">
<h1 className="font-bold">{item.card.info.name}</h1>
                <h4 className="font-semibold">  ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</h4>
                <p className="text-green-950">
                  {item.card.info.ratingCount}
                </p>
                <p className="text-xs">{item.card.info.description}</p>

</div>
                   <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 px-4 font-bold bg-white uppercase text-green-700 shadow-lg mt-24 ml-10"
                    onClick={()=>handleAddItem(item) }
                    >Add +</button>

                    </div>
                    <img className=" w-full " src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
 
                </div>
             </div>
                
            ))}
            
         
       
    </div>
    <div className="fixed bottom-1 flex justify-between">
    {
showCartBtn && (
<button className="p-2 px-4 font-bold bg-green-700 text-white shadow-lg mt-2 ml-10"
onClick={()=>navigate("/cart")}>
<span> ({cartItems.length}) added  </span>viewcart🛍️
</button>
)
}
    </div>
    </>
)
}
export default ItemList;