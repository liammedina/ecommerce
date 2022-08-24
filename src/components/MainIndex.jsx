import React from "react";
import {Link} from 'react-router-dom'
import '../styles/MainIndex.css'


const MainIndex = (data) => {
    return ( 
        <div className="card1">
        <div className="textoCard">
            <figcaption>Número <span className="h2Portada">Uno</span></figcaption>
            <p className="pPortada">Cuero de ternero granulado de grano completo</p>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0009/5063/2505/products/NUMERO_UN_DAUPHIN_1382000x2800px_1000x1400.jpg?v=1642432379" alt="Cartera Numero Nueve" class="imge-fluid imgCardPortada"></img>
    </div>
        


     );
}
 
export default MainIndex;