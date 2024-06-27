
import './index.css'
import React, { useState } from 'react';
import {useGetProducts} from './hooks/useGetProducts';
import UserProducts from '../Atoms/UserProducts';
import Search from '../Search';

function Products(){
    const { products,error,loading} = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleSearch = (searchResults) => {
        setFilteredProducts(searchResults);
    }
    const displayProducts = filteredProducts.length >0 ? filteredProducts: products;

    return(
        <div>
        <Search onSearch={handleSearch}/>
        <div className='image'>
        {loading && <h2>Loading products ...</h2>}
        {error && <h2>{error}</h2>}
        {displayProducts.length>0 ? displayProducts.map((product) => (
            <UserProducts
                key={product.id}
                image={product.image}
                productName={product.title}
                />

                // description={product.description}
            //     category={product.category}
            //     price={product.price}

               
           


            // />
            
        )) : !loading && <h2>No products found</h2> }
    </div>
    </div>
    )

}


export default Products;