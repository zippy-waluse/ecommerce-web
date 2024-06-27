
import './index.css'


const UserProducts = ({image,title,price,description,category})=>{
    return(
        <div>
            <img src={image} alt={`${title} item` }/>
            <h2>{title}</h2>
             <h2>{description}</h2>
             <h2>{category}</h2>
             <h2>{price}</h2>
             {/* <button className="button">Get item</button> */}
          


        </div>
    )
}

export default UserProducts;