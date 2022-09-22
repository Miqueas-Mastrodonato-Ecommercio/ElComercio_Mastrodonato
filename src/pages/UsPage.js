import React, {useContext} from "react"
import {CartContext} from "../Context/CartContext"

const UsPage = () => {
  //console.log(useContext(ThemeContext))
  const valorContext = useContext (CartContext);
  console.log('valorContext', valorContext)

  return (

<body>

<div class="CuadradoCentral">
    <h1>vamos a contarles</h1>
    <h2>Sobre nosotros</h2>
</div>
</body>
  
)
}
export default UsPage
