import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;