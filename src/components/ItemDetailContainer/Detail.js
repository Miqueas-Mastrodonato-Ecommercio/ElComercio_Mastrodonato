
const Detail = ({id, name, description, price, image, stock, type, content }) => {
    return (
      <div id='detalles'> 
            
            <h1>{name}</h1>
            <img src={image} alt={name} width={300}  height={300}  />
            <p>{description}</p>
            <p>Tipo de vino: {type}</p>    
            <p>Precio :{price}</p>  
            <p>Contenido: {content}</p>  
            <p>Stock: {stock}</p>   
            
      </div>
    );
  };
  
  export default Detail;
  