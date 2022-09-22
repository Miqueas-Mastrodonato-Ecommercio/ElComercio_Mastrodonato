import './App.css';
import NavBar from './components/Desafios/NavBar/NavBar.js';
import {BrowserRouter} from 'react-router-dom'; 
import Rutas from './Routers/Route';
import {  ProveedorCarrito } from './Context/CartContext';



function App() {

    return (
<ProveedorCarrito>
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
</ProveedorCarrito>
  );
}

export default App;
