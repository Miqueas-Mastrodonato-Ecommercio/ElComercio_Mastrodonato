import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
      <div>
        <nav class="navegacion"  > 
          <ul class="menu" >
          <CartWidget/>
            <li><a href="#">inicio</a></li>
            <li><a href="#">nosotros</a></li>
            <li><a href="#">servicios</a>
              <ul class="submenu">
                <li><a href="#"> 1° Servicio</a> </li>
                <li><a href="#"> 2° Servicio</a> </li>
                <li><a href="#"> 3° Servicio</a> </li>

              </ul>
            </li>
            <li><a href="#">contacto</a></li>            
          </ul>
        </nav>
      </div>
        
    )     
          
  };
  export default NavBar;