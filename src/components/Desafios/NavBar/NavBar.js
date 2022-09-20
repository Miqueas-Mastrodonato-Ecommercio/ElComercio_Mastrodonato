import '../../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
      <div>
        <nav className="navegacion"  > 
          <ul className="menu">
          <CartWidget/>
            <li><NavLink to="/inicio">inicio</NavLink></li>
            <li><NavLink to="/nosotros">nosotros</NavLink></li>
            <li><NavLink to="/servicios">servicios</NavLink>
              <ul class="submenu">
                <li><NavLink to="/productos/entradas"> Entradas</NavLink> </li>
                <li><NavLink to="/productos/vinos"> Vinos</NavLink> </li>
                <li><NavLink to="/productos/merch"> 3° Servicio</NavLink> </li>
              </ul>
            </li>
            <li><NavLink to="/contacto">contacto</NavLink></li>      
            <li><NavLink to="/cart">CartContainer</NavLink></li>        
          </ul>
        </nav>
      </div>
        
    )     
          
  };
  export default NavBar;