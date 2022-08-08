import React from "react";
import logosmall from "../Images/logosmall.png"
import "../styles/NavBar.css" 
import CartWidget from "./CartWidget"


export const NavBar = () => {
    return ( 
        <nav className="App-nav">
            <ul className="App-items">
                <li className="link">STORE</li>
                <li className="link">COLECCIÓN</li>
                <img src={logosmall} alt="" />
                <li className="link">BOUTIQUE</li>
                <li className="link">CONTACTO</li>
                <CartWidget/>
            </ul>
            
        </nav>
     );
}
 
export default NavBar;