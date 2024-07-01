import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css'


const Footer = ()=>{

    return(
     <div className="footer">

        <div className='icons'>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>

        

        </div>

       

       <div className='shop'>
       <h2>Shop</h2>
        <p>About us</p>
        <p>Contact</p>
        <p>Location</p>
        <p>FAQ</p>

       </div>

       <div className='link'>
        <h2>Links</h2>
        <p>Electronics</p>
        <p>Summer</p>
        <p>Book</p>
        <p>Cosmetics</p>
        <p>Furnitures</p>
       </div>

       <div className='contact'>
        <h2>Contact</h2>
        <p>+25464758579</p>
        <p>shop@gmail.com</p>
        <p>123 Kenga,Runzuri</p>
       </div>
        
     </div>   
    )

}


export default Footer;



