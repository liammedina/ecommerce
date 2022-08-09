import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'
import { useCartContext } from "../Context/CartContext";


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }



    return ( 
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top" src={data.img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="textDescription">{data.description}</p>
            </div>
            <h4>${data.price}</h4>
            <div key={data.id} className="CardProduct">
                <div  className="cardInfo">
                    <p className="textCategory">{data.category}</p>
                </div>
            </div>
            {
                goToCart 
                ? <Link to='/cart'>Ir al carrito</Link>
                : <ItemCount stock={data.stock} initial={0} onAdd={onAdd}/>
            }
            
        </div>
     );
}
 
export default ItemDetail;