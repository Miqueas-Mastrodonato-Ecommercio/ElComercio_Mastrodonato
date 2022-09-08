import mockDetail from "./Mock-detail";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = ({}) => {
    const [details, setDetails] = useState([]);

    const getmockDetail = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve(mockDetail);
        }, 2000 );
});

    useEffect(() => {
        getmockDetail.then((result) => {
            setDetails(result);
            console.log(result);
    });
    }, []);   



  return (<>
        { 
        details.length > 0 ? (
            <itemsWithDetail ItemDetail={details} />
            ) : (
            <div>Cargando Shop de Veneno</div>
            )
        }
        <ItemDetail itemsWithDetail={details} />
        </>
     )
}

export default ItemDetailContainer;
