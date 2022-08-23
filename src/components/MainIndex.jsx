import React from "react";
import img0b from '../Images/img0b.webp'
import img0 from '../Images/img0.webp'
import '../styles/MainIndex.css'


const MainIndex = () => {
    return ( 
        <div className="MainIndex">
            <div className="card1">
                <div className="textoCard">
                    <figcaption>Bandolera <span class="h2Portada">Auror</span></figcaption>
                    <p className="pPortada">Cuero de ternero liso de grano completo</p>
                </div>
                <img src={img0b} alt="Bandolera Auror" className="imge-fluid imgCardPortadaA"/>
                <img src={img0} alt="Bandolera Auror" class="imge-fluid imgCardPortadaB"/>
            </div>

        </div>
     );
}
 
export default MainIndex;