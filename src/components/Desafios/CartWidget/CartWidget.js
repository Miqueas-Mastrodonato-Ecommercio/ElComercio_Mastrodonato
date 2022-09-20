import { Link } from 'react-router-dom';
import logo from '../../Elements/Images/carrito.png';


const CartWidget = ({props} ) => {
    return(
        <div>
            <Link to="/cart">      
                <img src={logo} className="App-logoNav" alt="logo" /> 
            </Link>
        </div>
    )
}

export default CartWidget;
