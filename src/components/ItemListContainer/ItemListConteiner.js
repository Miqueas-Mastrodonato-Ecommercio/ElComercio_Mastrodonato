import data from "./Mock-data";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";


const ItemListContainer = ({children}) => {
    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        }, 2000);
    });


      useEffect(() => { 
      getData.then((result) => {
        setItems(result);
        console.log(result);
      });
      }, []);



  return (<>
          {
            items.length > 0 ? (
              <itemsInList ItemList={items} />
                ) : (
              <div>Cargando...</div>
                )
          }
          <ItemList itemsInList={items}/>
      |   </>
         )
}

export default ItemListContainer;
