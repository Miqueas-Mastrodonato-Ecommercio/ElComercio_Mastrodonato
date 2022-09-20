import data from "../ItemListContainer/Mock-data";
import ItemDetail2 from "../ItemListContainer/ItemDetail2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({children}) => {
    const {productId}= useParams;
    const [details, setDetails] = useState([]);

    const GetMockDetail = (id) =>{ 
         new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve(data[0]);
        }, 2000 );
});

    useEffect(() => {
        GetMockDetail.then((result) => {
            setDetails(result);
            console.log(result);
    });
    }, []);   



  return (<>
        { 
        details.length > 0 ? (
            <itemsWithDetail ItemDetail2={details} />
            ) : (
            <div>Cargando Shop de Veneno</div>
            )
        }
        <ItemDetail2 itemsWithDetail={details} />
        </>
     )
}
}
export default ItemDetailContainer;
