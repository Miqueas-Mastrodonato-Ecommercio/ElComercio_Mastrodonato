
const Item = ({id, name, description, price, image, stock }) => {
  return (
    <div id='items'> 
          
          <h1>{name}</h1>
          <img src={image} alt={name} width={300}  height={300}  />
          <p>{description}</p>
          <p>{price}</p>   
    </div>
  );
};

export default Item;
