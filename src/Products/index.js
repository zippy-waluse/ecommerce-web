

import React from 'react';
import {useGetProducts} from './hooks/useGetProducts';
import UserProducts from '../Atoms/UserProducts';


function Products(){
    const { products,error,loading} = useGetProducts();

    return(
        <div className='image'>
        {loading && <h2>Loading products ...</h2>}
        {error && <h2>{error}</h2>}
        {products.length > 0 ? products.map((product) => (
            <UserProducts
                key={product.id}
                image={product.image}
                productName={product.title}
            />
        )) : !loading && <h2>No products found</h2>}
    </div>
    )

}


export default Products;