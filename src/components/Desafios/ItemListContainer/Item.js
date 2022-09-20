import {Link} from "react-router-dom";

const Item = ({id, name, description, price, image, stock, categoria}) => {
 
  return (
    <div id='items'> 
          
          <h1>{name}</h1>
          <img src={image} alt={name} width={300}  height={300}  />
          <p>{description}</p>
          <p>{price}</p>   
          
          <Link to={`/item/${Item.id}`}>
          <button ClassName='boton-ver'>Ver en detalle ...</button>
          </Link>
    </div>
  )
}

export default Item;
    