import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import {addDoc, collection, getFirestore} from "firebase/firestore"
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
    
    return ( 
        <div className="cart">
            {cart.map(product => <ItemCart key={product.id} product={product} />)} 
            <p>Total: $ {totalPrice()}</p>
            <Link to='/Formulario' ><button onClick={handleClick}>Finalizar Compra</button></Link>
        </div>
     );
    }
     export default Cart;

















//     const {cart, totalPrice, removeProduct} = useCartContext();
//     if (cart.length === 0) {
//     return(
//         <>
//             <p>No hay elementos en el Carrito</p>
//             <Link to={'/'}>Hacer Compras</Link>
//         </>
//     )
//     }
//     return(
//         <>
//                 <h2>Carrito de Compras</h2>
//                 <br />
//                 <ul>
//                     {cart.map((product, key) =>{
//                         return(
//                             <div className="shoppingLlist" key={key}>
//                                 <img src={product.img} alt={product.title} className="imgCarrito" />
//                                 <li><Link to={`/item/${product.id}`}>{product.title}</Link></li>
//                                 <li>x{product.quantity}</li>
//                                 <li>Subtotal: {product.price * product.quantity}</li>
//                                 <button className="removeProduct" onClick={()=> removeProduct(product.id)}>&times;</button>

//                             </div>
//                         )
//                     })}
//                 </ul>
//                 <h3>{`El total de la compra es de: $ ${totalPrice()}`}</h3>
//                 <br />
//                 <Link to='/Formulario' className="btn btn-primary">Terminar Compra</Link>

//             </>
// )


