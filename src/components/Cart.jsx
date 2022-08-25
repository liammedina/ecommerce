import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import '../styles/Cart.css'


const Cart = () => {
        
    const {cart, setCart, totalPrice, clearCart, isInCart, removeProduct, addProduct, totalProducts, sendOrder } = useCartContext();
    
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
        .then(({ id }) => Swal.fire( 'Te compra ha sido realizada con éxito!',
        'El N* de tu órden es '+ id,
        'success') )
        
    }
    if (cart.length === 0) {
        return(
            <div className="emplyCart">
                <p className="goToShop">No hay elementos en el Carrito</p>
                <Link to='/'  className="goToShop"> Hacer Compras</Link>
            </div>
        )
    }
    const mostarAlert = () =>{
        Swal.fire( 'Te compra ha sido realizada con éxito!',
        'El N* de tu órden es ...' ,
        'success');
    } 
    return ( 
            <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)} 
            <h2 className="total" >Total: $ {totalPrice()}</h2>
            <form  className="form">
                <h2>Ingrese sus Datos:</h2>
                <label htmlFor="name" className="renglon">Nombre Completo</label>
                <input type="text" name="name" id="name" placeholder="Nombre y Apellido" className="renglon"/>

                <label htmlFor="tel" className="renglon" > Telefono </label>
                <input type="tel" name="tel" id="tel" placeholder="11-xxxx-xxxx" className="renglon" />

                <label htmlFor="email" className="renglon">Email</label>
                <input type="email" name="email" id="email"vplaceholder="you@example.com" className="renglon" />
            </form>
            <button onClick={handleClick} className="btn btn-outline-success" > Finalizar Compra </button>
            {}
            </>
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


