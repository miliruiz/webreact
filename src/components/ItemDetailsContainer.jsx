import React, {useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailsCointainer = () => {
    const [data, setData] = useState ({});
    const { detalleId } = useParams()

   useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detalleId);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
    
   },[detalleId])

    return ( 
        <>
        <ItemDetails data={data}/>
        </>
     );
}
 
export default ItemDetailsCointainer;