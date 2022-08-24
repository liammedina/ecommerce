import React, {useState, useContext} from "react";
import { clear } from "@testing-library/user-event/dist/clear";
import {addDoc, collection, getFirestore, updateDoc, doc} from "firebase/firestore"

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId]= useState("");

    const addProduct = (item, quantity) =>{

        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        }else {
            setCart([...cart, {...item, quantity}]);
        }
    }
   
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantity, 0)
    
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const sendOrder = (total, buyerData)=> {
        const timestamp = Date.now();
        const fecha = new Date(timestamp);

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        const order= {
            buyerData, 
            items: cart,
            fecha,
            total
        };
        addDoc(ordersCollection, order)
        .then((res)=> {
            setOrderId(res.id);
            updateStock(order);
            clear();
        })
        .catch((err) => console.log(err));

    };

    const updateStock = (order) =>{
        const db = getFirestore();

        order.items.forEach((item) => {
            const orderQuantity = item.quantity;
            const itemStock = parseInt(item.stock);
            const docRef = doc(db, "cookies", item.id);
            updateDoc(docRef, {stock: itemStock - orderQuantity});
        });
    }
    return ( 
        <CartContext.Provider value= {{
            cart,
            orderId,
            setOrderId,
            setCart,
            clearCart, 
            isInCart, 
            removeProduct,
            addProduct,
            totalPrice, 
            totalProducts,
            sendOrder
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;