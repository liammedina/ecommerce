import React from "react";
import logosmall from "../Images/logosmall.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/NavBar.css" 
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"



export const NavBar = () => {
    return ( 
        <Navbar  className="App-nav">
            <Container className="App-items">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="App-items">
                <NavLink to='/store' className="link">STORE</NavLink>
                    <NavDropdown title="PRODUCTOS" className="dropdown">
                        <li><NavLink to='/category/Bandolera' className="link">Bandoleras</NavLink></li>
                        <li><NavLink to='/category/Bolso' className="link">Bolsos</NavLink></li>
                        <li><NavLink to='/category/Cinturon' className="link">Cintos</NavLink></li>
                        <li><NavLink to='/category/Bolso Mini' className="link">Bolso Mini</NavLink></li>
                        <li><NavLink to='/category/Cartera' className="link">Cartera</NavLink></li>
                        <li><NavLink to='/category/Billetera' className="link">Billetera</NavLink></li>
                    </NavDropdown>
                    <NavLink to='/'><img src={logosmall} alt="" className="logoNavBar"/></NavLink>
                    <NavLink to='/Boutique' className="link">BOUTIQUE</NavLink>
                    <NavLink to='/Contact' className="link">CONTACTO</NavLink>
                    <NavLink to='/Cart'><CartWidget/></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        
        
     
}
 
export default NavBar;