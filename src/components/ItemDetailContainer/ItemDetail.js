import Detail from "./Detail";

const ItemDetail = ({itemsWithDetail}) => {
  return (
    <>
        {itemsWithDetail.map((accesorio) => {
            return (

                <Detail 
                image={accesorio.image}
                key={accesorio.id}
                name={accesorio.name}
                description={accesorio.description}
                price={accesorio.price}
                type={accesorio.type}
                content={accesorio.content}
                stock={accesorio.stock}
                />
                )
        })} 
    </>
  );
};

export default ItemDetail;
