import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { useCartContext } from "../Context/CartContext";
import '../styles/ItemDetail.css'
    
export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return ( 
        <div className="detailList">
            <div className="cardDetail">
                <img className="card-img" src={data.img} alt= ""/>
                <div className="">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="textDescription">{data.description}</p>
                    <h4>${data.price}</h4>
                    <div key={data.id} className="CardProduct">
                        <div  className="cardInfo">
                            <p className="textCategory">{data.category}</p>
                        </div>
                    </div>
                {
                    goToCart 
                    ? <Link to='/cart' className="goToCart">Ir al carrito</Link>
                    : <ItemCount stock={data.stock} initial={0} onAdd={onAdd}/>
                }
                </div>
                
            </div>
        </div>
     );
}
 
export default ItemDetail;