import React, {useEffect, useState}from "react";
import ItemDetail from "./ItemDetail";

const producto = {
    id: 1,
    title: "NÚMERO UNO",
    price: 3800,
    category: "bolso",
    description: "Innegablemente femenino por la voluptuosidad de sus curvas, el Numero Uno es nuestro bolso insignia. Imaginado como un bolso de día, nos encanta su estilo refinado y casual.",
    stock: 20,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-un-gris-graine.pagecollection.slider.png?v=84306668118106996191599736221"
} 

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});    

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000)
        });

        getData.then(res => setData(res));
    }, [])

    return ( 
        <ItemDetail data = {data}/>
     );
}
 
export default ItemDetailContainer;