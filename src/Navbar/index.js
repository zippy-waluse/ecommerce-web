import './index.css';
import {FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa';
import headphones from '../Images/headphones.jpg'


const Navbar = ()=>{
    return(
        <>
        
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





            <div className='text'>
                <h3>Get the best Product<br></br>
                at your home</h3>
              

            
                </div>


                <img src={headphones} className='headphones'/>

 
        

            



        <div>
            

      
        </div>
        </>
      
        

      

    )
}

export default Navbar;


export const Image=()=>{
    return(
        <div>

        </div>
        
    )
}