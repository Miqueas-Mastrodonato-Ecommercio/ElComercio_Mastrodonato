import { useState } from "react"
import ImgBoleto from "./ImgBoleto";

const ItemCounter = () => {
    const [stock, listaItem, setListaItem] = useState(0);
    const aumento = () => {                                               //lisItem=count
        if(listaItem<stock){
        setListaItem (listaItem + 1)
    }}

    const resta = () => {
        if(listaItem>1){
        setListaItem(listaItem - 1)
      }}

  return (
    <>
      <h1>Boletos para la funcion de San Antonio</h1>
      <div><ImgBoleto/></div>
      <h2>cantidad de boletos deseados</h2>
      <h2>{listaItem}</h2>
      <button id='mas' onClick={aumento}>+</button>
      <button id='menos' onClick={resta}>-</button>
      <button disabled={stock === 0} className='botoncarrito' onClick={()=>agregarItem(listaItem)}>
      Agregar al carro </button>
    </>
  )
}

export default ItemCounter;
