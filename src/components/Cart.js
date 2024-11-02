import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems=useSelector((store)=>
        {
            console.log("Inside cart");
            console.log(store);
            //Here is "store" is appStore, "cart" is Reducer function whichn we defined in appStore
           return store.cart.items}
        );
    
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
      <button className="font-bold m-2 p-2 rounded-lg bg-red-400 text-white" 
      onClick={handleClearCart}
      >Clear Cart</button>
      {cartItems.length===0 && (
      <h2>Cart is empty.Please add items to Cart</h2>)}
      <ItemList items={cartItems}/>
      
        
      </div>
    </div>
  );
};

export default Cart;
