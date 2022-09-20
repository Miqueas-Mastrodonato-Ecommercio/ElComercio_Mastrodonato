import Item from "./Item";

const ItemList2 = ({itemsInList}) => {

  return (
    <>  
        {itemsInList.map((producto) => {
        return (
                
                <Item
                key={producto.id}
                item={producto}
                name={producto.name}
                description={producto.description}
                price={producto.price} 
                image={producto.image}
                />
                )
        })}
    </>
  );
};

export default ItemList2;
