import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CDN_URL, MENU_API } from "../utils/consonants";
import { useNavigate } from "react-router-dom";

import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const navigateToProductsPage = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log("Cart Items:", cartItems); // Debugging log

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
         
          {cartItems.length === 0 ? (
            <div>
              <h1>Your shopping cart is empty! Add items to the cart!</h1>
              <button
                className="p-2 m-2 bg-blue-500 text-white rounded-lg"
                onClick={() => navigateToProductsPage("/")} // Example function
              >
                Go to Products
              </button>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
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
                                  <button
            className="p-2 bg-green-700 text-white rounded-lg  px-4 font-normal capitalize shadow-lg mt-24 ml-10"
                   onClick={() => handleRemoveItem(item.id)}
                 >
                   Remove
                 </button>
                                  </div>
                                  <img className=" w-full " src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
               
                              </div>
                           </div>
                              
//               <div
//                 key={item.id}
//                 className="border-b-2 border-gray-300 pb-3 pt-3 flex items-center justify-between"
//               >
//                 <div className="text-left w-9/12">
//                   <h1 className="font-bold">{item.card.info.name || "Unnamed Item"}</h1>
//                   <h4 className="font-semibold">
//                     ₹ {typeof item.card.info.price === "number" ? (item.card.info.defaultPrice  / 100).toFixed(2) : "0.00"}
//                   </h4>
//                   <p className="text-xs">{item.card.info.description || "No description available"}</p>
                  
//                   <img
// className=" w-3/12 p-4"
// src={`${CDN_URL}${item?.card?.info?.imageId || ""}`}
// alt={item?.card?.info?.name || "Unnamed Item"}
// />
// </div>                
                
//                 <button
//                   className="p-2 bg-red-500 text-white rounded-lg"
//                   onClick={() => handleRemoveItem(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
           ))}
          </div>
        )}  
         {cartItems.length !== 0  &&
         <button
            className="p-2 m-2 bg-gray-600 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
}
          </div>
      </div>
    </>
  );
};

export default Cart;
