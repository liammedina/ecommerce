import React from "react";
import shoppingCart from "../Images/shoppingCart.png";
import { useCartContext } from "../Context/CartContext";


export const CartWidget = () => {
    const {totalProducts} = useCartContext();
    
    return ( 
        <>
            <img src={shoppingCart} alt="" /> 
            <span className="span">{totalProducts() || ''} </span>
        </>
    );
}
 
export default CartWidget;