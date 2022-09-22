import React, {useContext} from "react"
import { CartContext } from "../../../Context/CartContext";

const CartContainer = () => {
    const valor = useContext (CartContext)
  return (
   
      <>
        {valor.ListaCarrito.map(item=>(
          <p>{item}</p>
        ))}
      </>
      
     
 
  )
}

export default CartContainer;
