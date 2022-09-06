import Item from "../Item/Item";

const ItemList = ({itemsInList}) => {

  return (
    <>  
        {itemsInList.map((producto) => {
        return (
                
                <Item
                key={producto.id}
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

export default ItemList;
