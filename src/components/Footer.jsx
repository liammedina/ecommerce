import React from "react";
import '../styles/footer.css'
import logosmall from '../Images/logosmall.png'
import gmail from '../Images/gmail.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
import whatsapp from '../Images/whatsapp.png'

const Footer = () => {
    return ( 
        <footer>
            <div>
                <img className="logoFooter" src={logosmall} alt="logo mini"></img>
                <span className="">&copy; 2022 Polène Inc</span>
            </div>
            <div className="divSocial">
                    <a className="icon" href="https://twitter.com/" target="blank"><img src={twitter} alt="" /></a>
                    <a className="icon" href="https://www.instagram.com" target="blank"><img src={instagram} alt="" /></a>
                    <a className="icon" href="https://www.whatsapp.com/" target="blank"><img src={whatsapp} alt="" /></a>
                    <a className="icon" href="https://www.gmail.com/" target="blank"><img src={gmail} alt="" /></a>
                <p>by <a href="www.liamedina.com.ar" target="blank">Lia Medina</a></p>
            </div>
    </footer>
     );
}
 
export default Footer;