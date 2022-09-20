
const Detail2 = ({id, name, description, price, image, stock, categoria }) => {
  return (
    <div id='items'> 
          
          <h1>{name}</h1>
          <img src={image} alt={name} width={300}  height={300}  />
          <p>{description}</p>
          <p>Precio :{price}</p> 
          <p>stock{stock}</p>
    </div>
  );
};

export default Detail2;
