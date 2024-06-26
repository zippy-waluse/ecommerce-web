const UserProducts = ({image,title})=>{
    return(
        <div>
            <img src={image} alt={`${title} item` }/>
            <h2>{title}</h2>
             

        </div>
    )
}

export default UserProducts;