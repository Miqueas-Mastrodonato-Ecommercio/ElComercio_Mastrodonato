import React, {useContext} from "react"
import {ThemeContext} from "../Context/ThemeContext"

const UsPage = () => {
  //console.log(useContext(ThemeContext))
  const valorContext = useContext (ThemeContext);
  console.log('valorContext', valorContext)

  return (

<body>

<div class="CuadradoCentral">
    <h1>vamos a contarles</h1>
    <h2>Sobre nosotros</h2>
    <h2>{valorContext.texto}</h2>
    <input onChange={(event)=>valorContext.setTexto(event.target.value)} placeholder= "type something"/>

    
</div>
</body>
  
)
}
export default UsPage
