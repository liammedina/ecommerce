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
                <Nav.Link href='/store' className="link">STORE</Nav.Link>
                    <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown" className="link">
                        <NavDropdown.Item href='/category/Bandolera' className="link">Bandoleras</NavDropdown.Item>
                        <NavDropdown.Item href='/category/Bolso' className="link">Bolsos</NavDropdown.Item>
                        <NavDropdown.Item href='/category/Cinturon' className="link">Cintos</NavDropdown.Item>
                        <NavDropdown.Item href='/category/Bolso Mini' className="link">Bolso Mini</NavDropdown.Item>
                        <NavDropdown.Item href='/category/Cartera' className="link">Cartera</NavDropdown.Item>
                        <NavDropdown.Item href='/category/Billetera' className="link">Billetera</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/'><img src={logosmall} alt="" className="logoNavBar"/></Nav.Link>
                    <Nav.Link href='/Boutique' className="link">BOUTIQUE</Nav.Link>
                    <Nav.Link href='/Contact' className="link">CONTACTO</Nav.Link>
                    <NavLink to='/Cart'><CartWidget/></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        
            // <nav className="App-nav">
            //     <ul className="App-items">
            //         <li><NavLink to='/store' className="link">STORE</NavLink></li>
            //         <li><NavLink to='/category/Bandolera' className="link">BANDOLERAS</NavLink></li>
            //         <NavLink to='/'><img src={logosmall} alt="" className="logoNavBar"/></NavLink>
            //         <li><NavLink to='/category/Bolso'  className="link">BOLSOS</NavLink></li>
            //         <li><NavLink to='/Contact' className="link">CONTACTO</NavLink></li>
            //         <NavLink to='/Cart'><CartWidget/></NavLink>
            //     </ul>
            // </nav> 
        
     
}
 
export default NavBar;