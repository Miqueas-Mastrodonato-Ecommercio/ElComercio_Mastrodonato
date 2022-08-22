import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

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
        </a>
      </header>
      <body>
    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
       </body>
      
    </div>
  );
}

export default App;
