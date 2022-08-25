import React, {useState, useEffect} from "react";
import "../styles/ItemCount.css";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return ( 
        <div className="counter">
            <button className="btn" disabled={count<=1} onClick={decrease}> - </button>
            <span>{count}</span>
            <button className="btn" disabled={count>=stock} onClick={increase}> + </button>
            <div><button className="addCart" disabled={stock <=0 } onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button></div>
        </div>

     );
}
 
export default ItemCount;