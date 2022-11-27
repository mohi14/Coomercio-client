import React from 'react';
import AdvertiseMent from '../AdvertiseMent/AdvertiseMent';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import WhyCoomercio from '../WhyCoomercio/WhyCoomercio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseMent></AdvertiseMent>
            <ProductCategories></ProductCategories>
            <WhyCoomercio></WhyCoomercio>

        </div>
    );
};

export default Home;