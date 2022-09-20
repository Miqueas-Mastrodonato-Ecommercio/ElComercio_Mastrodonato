import './App.css';
import NavBar from './components/Desafios/NavBar/NavBar.js';
import ItemListContainer from './components/Desafios/ItemListContainer/ItemListConteiner';
import ItemCounter from './components/Desafios/ItemCounter/ItemCounter.js';
import ItemDetailContainer from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, useSearchParams} from 'react-router-dom'; 
import Contactpage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import UsPage from './pages/UsPage';
import Rutas from './Routers/Route';
import {ThemeContext} from './Context/ThemeContext'
import { useState } from 'react';



function App() {
const [texto,setTexto] = useState("")


    return (
<ThemeContext.Provider value= {{texto:texto, setTexto}}>
  <BrowserRouter>
    <div className="App"> 
      <header className="App-header">
          <a>
          <NavBar></NavBar>
          </a>
      </header>
      <body>
        <Rutas></Rutas>
          
          <div class="CuadradoCentral">
          </div>
      </body>     
    </div>
  </BrowserRouter>
</ThemeContext.Provider>
  );
}

export default App;
