import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='pt-36 max-w-[1500px] m-auto grid grid-cols-1 gap-10 mb-40'>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;