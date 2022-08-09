import React from "react";

export const ItemDetail = ({data}) => {
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
            {/* <ItemCount stock={props.Item.stock} initial={0} onAdd={onAdd}/> */}
        </div>
     );
}
 
export default ItemDetail;