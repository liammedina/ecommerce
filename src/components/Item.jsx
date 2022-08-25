import React, {useContext} from "react";
import '../styles/Item.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/CartContext';
import '../styles/Item.css'

const Item = ({info}) => {

    return(
        <div href="" className="card" style={{width: "17rem", margin:'5vh'}}>
            <img className="card-img-top" src={info.img} alt="" />
            <div  className="card-body d-flex flex-column justify-content-center">
                <h4  className="card-title">{info.title}</h4>
                <div>
                    <h4>${info.price}</h4>
                    <Link to={`/detail/${info.id}`}><button  className="btn btn-primary">Ver Detalle del Producto</button></Link>
                </div>
            </div>
        </div>
   )
}

export default Item;
