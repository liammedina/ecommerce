import React, {useEffect, useState}from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from "firebase/firestore"


export const ItemDetailContainer = () => {

    const [data, setData] = useState({}); 
    const {detailId} = useParams();   

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detailId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [detailId])

    return ( 
        <ItemDetail data = {data}/>
     );
}
 
export default ItemDetailContainer;