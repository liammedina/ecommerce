import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import {addDoc, collection, getFirestore, updateDoc, doc, getDoc} from "firebase/firestore"
import '../styles/Cart.css'


const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    
    const order = {
        buyer: {
            name: 'Diego', 
            email: 'Diego@gmail.com',
            phone: '1155226633',
            address: 'zaraza 1235'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el Carrito</p>
                <Link to={'/'}>Hacer Compras</Link>
            </>
        )
    }
    // const updateStock = async (itemList) => {
    //     const db = getFirestore();
    //     itemList.forEach(async(item) => {
    //         const orderDoc = doc(collection(db, 'items'), item.id);
    //         const dbItem = await getDoc(orderDoc);
    //         const dbBody = dbItem.data();
    //         const newStock = dbBody.stock - item.quantity;
    //         console.log(item.title, newStock);
    //         updateDoc(orderDoc, {stock: newStock});
    //     })
    // }

    
    return ( 
        <div className="cart">
            {cart.map(product => <ItemCart key={product.id} product={product} />)} 
            <p>Total: $ {totalPrice()}</p>
            <Link to={'./Form'}><button onClick={handleClick}>Finalizar Compra</button></Link>
        </div>
     );
}
 
export default Cart;