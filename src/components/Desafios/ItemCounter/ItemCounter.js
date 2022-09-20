import { useState } from "react"
import ImgBoleto from "./ImgBoleto";

const ItemCounter = () => {
    const [listaItem, setListaItem] = useState(0);
    const aumento = () => {
        setListaItem (listaItem + 1)
    }

    const resta = () => {
        setListaItem(listaItem - 1)
    }

  return (
    <>
      <h1>Boletos para la funcion de San Antonio</h1>
      <div><ImgBoleto/></div>
      <h2>cantidad de boletos deseados</h2>
      <h2>{listaItem}</h2>
      <button id='mas' onClick={aumento}>+</button>
      <button id='menos' onClick={resta}>-</button>
    </>
  )
}

export default ItemCounter;
