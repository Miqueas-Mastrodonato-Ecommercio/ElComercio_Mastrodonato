import data from "./Mock-data";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


const ItemListContainer = ({children}) => {
    const {categoryId} =useParams();
    const [items, setItems] = useState([0]);
    console.log('categoryId',categoryId)

    const getData = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        }, 2000);
    });


      useEffect(() => { 
      getData.then((result) => {
            if(categoryId) {
              const newProducts = result.filter ( item => item.categoria === categoryId);
              setItems(newProducts)
            } else {
              setItems(result)
            }
          
        })
        }, [categoryId])



  return (<>
          {
            items.length > 0 ? (
              <itemsInList ItemList={items} />
                ) : (
              <div>Cargando la Shop de Veneno...</div>
                )
              }
          <p>ItemListContainer</p>
          <ItemList itemsInList={items}/>
         </>
         )
}

export default ItemListContainer;
