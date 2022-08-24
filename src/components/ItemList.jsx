import React from "react";
import Item from './Item';
import '../styles/ItemList.css'

const ItemList = ({data = []}) => {
   
    return ( 
        
        <div className="prueba">
            {data.map(product => <Item key={product.id} info={product}/>)}
        </div>
        
    );
}
 
export default ItemList;