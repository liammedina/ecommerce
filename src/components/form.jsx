import React from "react";


const Form = () => {
    return ( 
        <>
            <main className="mainContacto">
                <Form>
                    
                    <p>Complete el formulario para finalizar la compra</p>
                   
                    <input className="renglon" type="text" required name="Nombre" placeholder="Nombre"/>
                    <input  className="renglon" type="text" required name="Apellido" placeholder="Apellido"/>
                    <input  className="renglon" type="email" required name="email" placeholder="E-mail"/><br/>
                    
                    <p>¿Desea recibir el Newsletter? <input type="checkbox"/></p>
                    
                    <input type="reset" value="Limpiar Formulario"/>
                    <input type="submit"/>
                </Form>
            </main>
        </>
     );
}
 
export default Form;