import React, {useContext} from "react"
import {ThemeContext} from "../../../Context/ThemeContext"

const CartContainer = () => {
    const valorContext = useContext (ThemeContext);
  return (
    <div>
      CartContainer
      <p>{valorContext.texto}</p>
      <button onClick={()=>valorContext.setTexto("nuevo texto")}>enviar texto</button>
    </div>
  )
}

export default CartContainer
