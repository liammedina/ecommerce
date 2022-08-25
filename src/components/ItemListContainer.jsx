import React, {useState, useEffect} from "react";
import Title from "./title";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import '../styles/ItemListContainer.css'


export const ItemListContainer = ({texto}) => {
    
    const [data, setData] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

        if(categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    },[categoryId])

    return ( 
        <div className="ItemListContainer">
        <Title greeting={texto}/>
        <ItemList data={data}/>
        </div>
     );
}
 
export default ItemListContainer;