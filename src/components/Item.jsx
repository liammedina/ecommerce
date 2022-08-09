import React from "react";
import '../styles/Item.css'
import img0b from "../Images/img0b.webp"

const Item = ({info}) => {
    return(
        <div href="" className="card" style={{width: "17rem"}}>
            <img className="card-img-top" src={info.img} alt="" />
            <div  className="card-body d-flex flex-column justify-content-center">
                <h4  className="card-title">{info.title}</h4>
                <div>
                    <h4>${info.price}</h4>
                    <button  className="btn btn-primary">Ver Detalle del Producto</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
