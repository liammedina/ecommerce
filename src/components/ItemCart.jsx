import React from "react";
import { useCartContext } from "../Context/CartContext";

import "../styles/ItemCart.css"


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();

    return ( 
        <div className="itemCart">
            <img src= {product.img} alt={product.title} />
            <div className="itemCartDos">
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio por unidad: ${product.price}</p>
                <h6 className="subtotal">SUBTOTAL: ${product.quantity * product.price}</h6>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>ELIMINAR</button>
            </div>
        </div>
     );
}
 
export default ItemCart;