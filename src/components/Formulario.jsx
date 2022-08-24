import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    const navigate = useNavigate();
    const { totalPrice, sendOrder } = useContext(useCartContext);

    const [name, setName] = useState(false);
    const [phone, setPhone] = useState(false);
    const [email, setEmail] = useState(false);
    const [email2, setEmail2] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        name && phone && email && email2 ? setBtnDisabled(false) : setBtnDisabled(true);
    }, [name,phone,email,email2]);

    const nameValidation = (e) => {
        const successId = document.getElementById('nameSuccess');
        const failureId = document.getElementById('nameFailure');
        const fullnameId = document.getElementById('fullname');

        const noWhitespace = e.target.value.trim();

        if(noWhitespace !== ""){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            fullnameId.style.border = '2px solid green';
            setName(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            fullnameId.style.border = '2px solid red';
            setName(false);
        }
    };

    const phoneValidation = (e) => {
        const successId = document.getElementById('phoneSuccess');
        const failureId = document.getElementById('phoneFailure');
        const phoneId = document.getElementById('phone');

        const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        const test = phoneRegex.test(e.target.value);

        if(test){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            phoneId.style.border = '2px solid green';
            setPhone(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            phoneId.style.border = '2px solid red';
            setPhone(false);
        }
    };

    const emailValidation = (e) => {
        const successId = document.getElementById('emailSuccess');
        const failureId = document.getElementById('emailFailure');
        const emailId = document.getElementById('mail');

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const test = emailRegex.test(e.target.value);

        if(test){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            emailId.style.border = '2px solid green';
            setEmail(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            emailId.style.border = '2px solid red';
            setEmail(false);
        }
    };

    const email2Validation = (e) => {
        const successId = document.getElementById('email2Success');
        const failureId = document.getElementById('email2Failure');
        const emailId = document.getElementById('mail');
        const email2Id = document.getElementById('mail2');

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const test = emailRegex.test(e.target.value);
        const test2 = emailId.value === email2Id.value;

        if(test && test2){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            email2Id.style.border = '2px solid green';
            setEmail2(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            email2Id.style.border = '2px solid red';
            setEmail2(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input) => input.value);
        const total = totalPrice();
        sendOrder(total, {name: data[0], telefono: data[1], mail: data[2]});
        navigate("/success");
    };

    return(
        <>
            <Formulario onSubmit={handleSubmit}>

                <label htmlFor="fullname">Nombre Completo:</label>
                <div className="input-divs">
                    <input type="text" id="fullname" name="fullname" placeholder="Nombre Completo" className="form-inputs" onChange={nameValidation} />
                   
                </div>

                <label htmlFor="phone">Teléfono:</label>
                <div className="input-divs">
                    <input type="tel" id="phone" name="phone" placeholder="XX-XXXX-XXXX" className="form-inputs" onChange={phoneValidation} />
                
                </div>
                
                <label htmlFor="mail">Correo Electrónico:</label>
                <div className="input-divs">
                    <input type="email" id="mail" name="mail" placeholder="E-Mail" className="form-inputs" onChange={emailValidation} />
                    
                </div>

                <label htmlFor="mail2">Repetir Correo Electrónico:</label>
                <div className="input-divs">
                    <input type="email" id="mail2" name="mail2" placeholder="E-Mail" className="form-inputs" onChange={email2Validation} />
                    
                </div>

                <button type="submit" className="boton" id="btnComprar" disabled={btnDisabled}>Comprar</button>
            </Formulario>
        </>
    )
};

export default Formulario;

// const Formulario = () => {
//     const {register, handleSubmit} = useForm();
//     return ( 
//         <div>
//             <h1>Completa con tus datos para finalizar la Compra</h1>
//             <form>
//                 <div>
//                     <label>Apellido</label>
//                     <input type="text" name="" />
//                 </div>
//                 <div>
//                     <label>Nombres</label>
//                     <input type="text" name="" />
//                 </div>
//                 <div>
//                     <label>Dirección de Entrega</label>
//                     <input type="text" name="" />
//                 </div>
//                 <div>
//                     <label>Teléfono</label>
//                     <input type="tel" id="phone" name="phone" placeholder="XX-XXXX-XXXX" className="form-inputs" />
//                 </div>
//                 <div>
//                     <label>Correo Electrónico</label>
//                     <input  type="email" id="mail" name="mail" placeholder="E-Mail" className="form-inputs" />
//                 </div>
//                 <div>
//                     <label>Nombre</label>
//                     <input type="text" name="" />
//                 </div>

//             </form>
//         </div>
//      );
// }
 
// export default Formulario;