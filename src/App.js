import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListConteiner';
import Cuadrado from './components/Text/Cuadrado';
import ItemCounter from './components/ItemCounter/ItemCounter.js';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <a
          /* className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"  */
        >
        <NavBar></NavBar>
        <ItemListContainer> 
        <div>Bienvenido a la pagina</div>
        </ItemListContainer>


        </a>
      </header>
      <body>
      <div class="CuadradoCentral">

        <div class="CuadradoBoleto">
        <ItemCounter/>
        </div>

        
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer/>
        <h1>holi</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
        
        </div>
      
      
      <div class="Cuadrado">
                <h1>Querido San Antonio</h1> 
                                <p>En una iglesia ubicada en el interior de Argentina, 
                                tres mujeres se encuentran entre chismes y rezos. Bajo
                                la mirada de San Antonio de Padua pedirán por hombres 
                                que lleguen a sus vidas. Pina anhela el regreso de su
                                marido, Eliseo, que se fue a la guerra; Filumena 
                                continúa creyendo en el hombre soñado y el amor verdadero;
                                y Carmela intenta sobrevivir bajo las sombras de la iglesia.
                                En días de calor dónde ni el aire corre por esa capilla
                                deberán saber quiénes son sus aliados y quiénes no.</p> 
        </div>
        
       </body>
      
    </div>
  );
}

export default App;
