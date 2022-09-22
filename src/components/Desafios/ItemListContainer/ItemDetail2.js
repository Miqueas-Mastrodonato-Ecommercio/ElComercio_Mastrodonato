import ItemCounter from "../ItemCounter/ItemCounter";
import Detail2 from "./Detail";


const ItemDetail2 = ({itemsWithDetail}) => {
  return (
    <>
    
        {itemsWithDetail.map((accesories) => {
            return (

                <Detail2 
                image={accesories.image}
                key={accesories.id}
                name={accesories.name}
                description={accesories.description}
                price={accesories.price}
                /> 
                
                
                
                ) 
        })} <ItemCounter></ItemCounter>
    </>
  );
};

export default ItemDetail2;