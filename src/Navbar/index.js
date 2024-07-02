import './index.css';
import {FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa';
import headphones from '../Images/headphones.jpg';
import Search from '../Search';



const Navbar = ()=>{
    return(
        
        
        <div>

            <div>
            <Search/>
            </div>

           
        <div className='nav'>
            <li>Home</li>
            <li>Product</li>
            <li>Service</li>
            <li>Contact</li>
            <div className='icons'>
            <FaSearch/>
            <FaHeart/>
            <FaCartPlus/>

            </div>
            </div>

            <div className='landingpage'>
                <div></div>
                <div className='textg'>
                <h3 >Get the best product<br></br>
                at your home</h3>

                <div>
            <Search/> 
            </div>

                <div >
                    <img className='headphone' src={headphones} alt='headphones'/>

                </div>

                </div>

              

            </div>

            <div>
                
            </div>


            </div>

            





    
      
        

      

    )
}

export default Navbar;
