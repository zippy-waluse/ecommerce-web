import './index.css';
import {FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa';

const Navbar = ()=>{
    return(
        <div className='nav'>
            <li>Home</li>
            <li>Product</li>
            <li>Service</li>
            <li>Contact</li>
            <FaSearch/>
            <FaHeart/>
            <FaCartPlus/>
            <FaSearch/>
        </div>

      

    )
}

export default Navbar;