import React, {useState, useEffect} from "react";
import Title from "./title";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';



const Database = [{
    id: 1,
    title: "NÚMERO UNO",
    price: 3800,
    category: "bolso",
    description: "Innegablemente femenino por la voluptuosidad de sus curvas, el Numero Uno es nuestro bolso insignia. Imaginado como un bolso de día, nos encanta su estilo refinado y casual.",
    stock: 20,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-un-gris-graine.pagecollection.slider.png?v=84306668118106996191599736221"
},
{
    id: 2,
    title: "TONCA",
    price: 3650,
    category: "bandolera",
    description:"El bolso Tonca introduce detalles únicos a la creación elegante y precisa que es tan característica de sus diseños.", 
    stock: 13,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/tonca-duo-glacier.pagecollection.slider.png?v=71869590185208102111656596891"
},
{
    id: 3,
    title: "BAG NÚMERO SEIS",
    price: 3230,
    category: "bolso-mini",
    description: "Minimalista y elegante, el mini bolso Número Seis juega con la precisión de las curvas y el refinamiento de una pieza metálica central.",
    stock: 14,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-six-camel.pagecollection.slider.png?v=162517635940735425761610355902"
},
{
    id: 4,
    title: "CYME",
    price: 3780,
    category: "bolso",
    description: "El diseño escultórico de las Cabas, con las curvas y pliegues característicos de la marca, puede adoptar dos formas diferentes.",
    stock: 12,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/cyme-tisse-beige.pagecollection.slider.png?v=64214569393848000751650555263"
},
{
    id: 5,
    title: "XL BAG CYME",
    price: 3950,
    category: "bolso-xl",
    description: "El Cyme es un bolso de mano con un diseño escultural cuyo cuero da forma a la forma y las curvas. La ondulación de la parte superior, los huecos y las rondas completan su originalidad.",
    stock: 28,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-douze-mini-craie-grain.pagecollection.slider.png?v=136680217831231082571621006495"
},
{
    id: 6,
    title: "BAG NÚMERO NUEVE",
    price: 3590,
    category: "bolso",
    description: "El Número Nueve es una pieza con un diseño orgánico que ofrece un equilibrio perfecto entre flexibilidad y sujeción.",
    stock: 36,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-neuf-mini-ble-grain.pagecollection.slider.png?v=24686393580239854091652345776"
},
{
    id: 7,
    title: "NÚMERO UNO MICRO",
    price: 3100,
    category: "bolso-mini",
    description: "El diseño de la firma Numéro Uno miniaturizado hasta el más mínimo detalle: pliegues, solapa de media luna, tacos de base y bolsillo exterior.",
    stock: 24,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-un-micro-sauge-grain.pagecollection.slider.png?v=158444330771399034581644324678"
},
{
    id: 8,
    title: "BAG ELENA",
    price: 4800,
    category: "bolso",
    description: "La pieza está inspirada en el armario ecuestre y los códigos de la tapicería a través de detalles de alta gama como la correa curva, la tapicería con espuma, o los puntos de mano.",
    stock: 28,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-dix-beige.pagecollection.slider.png?v=5860605575585352901616602192"
},
{
    id: 9,
    title: "NÚMERO SIETE",
    price: 2540,
    category: "tarjetero",
    description: "Bolso con cremallera, bolsillo plano y soporte para tarjeta",
    stock: 6,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/portefeuille-sept-bandouliere-jaune-aurore-grain.pagecollection.slider.png?v=10204956348021667181624464064"
},
{
    id: 10,
    title: "BANDOLERA AUROR",
    price: 3900,
    category: "bandolera",
    description: "La bandolera Auror es sin duda una de nuestras favoritas de la colección. Su carácter sporty sumado al detalle de su herraje mochilero la hacen perfecta para looks casuales.",
    stock: 25,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-un-mini-craie-grain.pagecollection.slider.png?v=171423247390939276171625816497"
},
{
    id: 11,
    title: "NÚMERO SEIS CINT!",
    price: 3750,
    category: "bolso-cinturon",
    description: "Usado en el cuerpo, esta creación ofrece una cierta visión del bolso: ya no es un accesorio independiente sino que se integra con el cuerpo a la vez que libera movimiento.",
    stock: 30,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/ceinture-bordeaux-croco.pagecollection.slider.png?v=140369567718162704271610101476"
},
{
    id: 12,
    title: "BAG UMI",
    price: 3800,
    category: "bolso",
    description: "Su forma rectangular está tallada por un singular arco. Sus líneas asertivas se suavizan por la apariencia suave de los pliegues laterales, característicos del estilo Polène.",
    stock: 25,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/camera-bag-argile-grain.pagecollection.slider.png?v=115091041286209162731631781489"
},
{
    id: 13,
    title: "BAG BÉRI",
    price: 4800,
    category: "bolso",
    description: "El Béri es un bolso lleno de ligereza, suavidad y feminidad. El trabajo de cuatro piezas de cuero idéntico, dobladas e integrando directamente el mango, le da un estilo fuerte y refinado",
    stock: 27,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-onze-lilas-grain-bandouliere.pagecollection.slider.png?v=151840109931891793201620990441"
},
{
    id: 14,
    title: "HOBO NÚMERO DIEZ",
    price: 6200,
    category: "bolso",
    description: "El Hobo Número Diez está inspirado en el mundo ecuestre y el conocimiento de la talabartería. El diseño incluye detalles de alta gama como una correa curva, acolchado de espuma y costuras a mano. ",
    stock: 34,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-dix-hobo-craie-grain.pagecollection.slider.png?v=83248429872585695581616602364"
},
{
    id: 15,
    title: "YKÉ",
    price: 5400,
    category: "bolso",
    description: "La cesta de mimbre hecha a mano está envuelta en un pétalo de cuero, un diseño único y elegante. El bolso se cierra con una solapa superior de cuero.",
    stock: 28,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/yke-tan.pagecollection.slider.png?v=85350849995876426311655191176"
},
{
    id: 16,
    title: "NÚMERO OCHO",
    price: 4500,
    category: "bolso-mini",
    description: "El Número Ocho es la nueva bolsa de cubo de la firma Polène. Un diseño con líneas escultóricas y un trabajo de ondulación del cuero refuerzan la singularidad y el relieve de esta pieza.",
    stock: 29,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-huit-mini-amande-fraiche-grain.pagecollection.slider.png?v=82709168795710033661648730335"
},
{
    id: 17,
    title: "CINTURON UMI",
    price: 2600,
    category: "cinturon",
    description: "Con su doble giro en piel de becerro en relieve estilo cocodrilo, atado alrededor de una sobria y elegante hebilla de acabado dorado, el cinturón fino Umi es el accesorio perfecto para enfatizar el tamaño y estructurar la silueta.",
    stock: 37,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/ceinture-umi-fine-sable-croco.pagecollection.slider.png?v=49733078247776917301634291651"
},
{
    id: 18,
    title: "CINTURÓN UMI BELT",
    price: 2800,
    category: "cinturon",
    description: "Con su doble nudo de cuero con estampado de lagarto atado alrededor de una sobria y elegante hebilla de acabado dorado, el delgado cinturón Umi es el accesorio perfecto para enfatizar la cintura y estructurar la silueta.",
    stock: 20 ,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/ceinture-umi-large-taupe-croco.pagecollection.slider.png?v=39884210492287312371634291735"
},
{
    id: 19,
    title: "NÚMERO UNO BACKPACK",
    price: 5750,
    category: "mochila",
    description: "El Numéro Un Mini se transforma por primera vez en una versión de mochila. Refinado y relajado, se puede llevar de múltiples maneras gracias a su correa ajustable.",
    stock: 35,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-un-mini-sac-a-dos-caramel.pagecollection.slider.png?v=154725821318869562311599736277"
},
{
    id: 20,
    title: "BAG NÚMERO SIETE",
    price: 5150,
    category: "cartera",
    description: "El broche, el elemento central de la pieza, juega con una armonía de curvas y ángulos rectos. Este elemento se magnifica con un dorado de chapado PVD extremadamente resistente.",
    stock: 35,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/numero-sept-mini-bordeaux-grain.pagecollection.slider.png?v=156488598126117108641610361345"
},
{
    id: 21,
    title: "WALLET NÚMERO SIETE",
    price: 3750,
    category: "billetera",
    description: "Billetera de solapa larga de tipo continental con interior de cuero. El cinturón extraíble le permite llevar la billetera en la cintura o en la cruz (correa para el hombro).",
    stock: 35,
    img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/portefeuille-sept-ceinture-camel-grain.pagecollection.slider.png?v=26372589825597460981622796220"
}];


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
            resolve(Database);
        },1500);
        });
        if(categoryId) {
            getData.then(res => setData(res.filter(product => product.category === categoryId)));
        }else {
            getData.then(res => setData(res)) 
        }

    },[categoryId])

    
    return ( 
        <>
        <Title greeting={texto}/>
        
        <ItemList data={data}/>
        </>
     );
}
 
export default ItemListContainer;