import React, {useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";

const products= {
    id: 1, img: "img/silicone-case.jpeg", titulo: "Silicone Case", precio: 1000, descripcion: "Funda de silicona. Se adapta perfectamente a los botones de volumen, el botón lateral y las curvas del teléfono." 
}

const ItemDetailsCointainer = () => {
    const [item, setData] = useState ({});

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });

        getItem.then(res => setData(res))

    }, [])

    return ( 
        <>
        <ItemDetails item={item}/>
        </>
     );
}
 
export default ItemDetailsCointainer;