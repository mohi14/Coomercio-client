import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import WhyCoomercio from '../WhyCoomercio/WhyCoomercio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <WhyCoomercio></WhyCoomercio>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;