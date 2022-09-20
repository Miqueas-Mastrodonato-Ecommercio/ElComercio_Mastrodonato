import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactpage from '../pages/ContactPage';
import MainPage from '../pages/MainPage';
import UsPage from '../pages/UsPage';
import ItemListContainer from "../components/Desafios/ItemListContainer/ItemListConteiner";
import ItemDetailContainer from "../components/Desafios/ItemDetailContainer/ItemDetailContainer"
import CartContainer from "../components/Desafios/CartContainer/CartContainer";

const Rutas = () => {
  return (
    
    <div>
      
      <Routes>
            <Route path="/" element ={<MainPage/>}/>  
            <Route path="/inicio" element ={<MainPage/>}/>
            <Route path="/contacto" element ={<Contactpage/>}/>
            <Route path="/nosotros" element = {<UsPage/>}/>
            <Route path="/servicios" element = {<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element = {<ItemListContainer/>}/>
            <Route path="/item/:productId" element = {<ItemDetailContainer/>}/>


            <Route path="/cart" element = {<CartContainer/>}/>
          </Routes>
        
    </div>
    
  )
  
}


export default Rutas;
