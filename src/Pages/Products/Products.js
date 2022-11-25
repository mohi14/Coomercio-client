import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='pt-36'>
            <h1>{products.length}</h1>
        </div>
    );
};

export default Products;