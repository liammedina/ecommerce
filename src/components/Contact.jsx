import React from "react";
import logoBig from '../Images/logoBig.jpg'
import "../styles/Contact.css" 

const Contact = () => {
    return ( 
            <>
            <main className="mainContacto">
                <img src={logoBig} className="img-fluid imgContact" alt="logoBig"/>
                <form>
                    <h3>Mantengámonos en contacto</h3>
                    <p>Complete el formulario y nos comunicaremos con Usted</p>
                   
                    <input className="renglon" type="text" required name="Nombre" placeholder="Nombre"/>
                    <input  className="renglon" type="text" required name="Apellido" placeholder="Apellido"/>
                    <input  className="renglon" type="email" required name="email" placeholder="E-mail"/><br/>
                    <select id="sexo" name="sexo" size="1">
                        <option>Soltero/a</option>
                        <option>Casado/a</option>
                        <option>Divorciado/a</option>
                        <option>Viudo/a</option>
                    </select>
                    <p>¿Desea recibir el Newsletter? <input type="checkbox"/></p>
                    <p><textarea  className="renglon" rows="5" placeholder="Comentarios"></textarea></p>
                    <input type="reset" value="Limpiar Formulario"/>
                    <input type="submit"/>
                </form>
            </main>
        </>
     );
}
 
export default Contact;



