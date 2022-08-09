import React from "react";
import logosmall from "../Images/logosmall.png"
import "../styles/NavBar.css" 
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


export const NavBar = () => {
    return ( 
        <nav className="App-nav">
            <ul className="App-items">
                <li><NavLink to='/store' className="link">STORE</NavLink></li>
                <li><NavLink to='/category/bandolera' className="link">BANDOLERAS</NavLink></li>
                <NavLink to='/'><img src={logosmall} alt="" /></NavLink>
                <li><NavLink to='/category/bolso'  className="link">BOLSOS</NavLink></li>
                <li><NavLink to='/Contacto' className="link">CONTACTO</NavLink></li>
                <NavLink to='/Cart' ><CartWidget/></NavLink>
            </ul>
        </nav>
     );
}
 
export default NavBar;