import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategoresCard from './ProductCategoresCard';

const ProductCategories = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/brands')
            .then(data => {
                setBrands(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>loading.....</h1>
    }
    return (
        <div className='max-w-[1500px] m-auto my-16'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold mb-5'>Product Categories</h2>
                <p className='text-2xl font-semibold text-primary'>Choose your favorite brand</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:px-0'>
                {
                    brands.map(brand => <div className="card  shadow-2xl static hover:border-2 hover:border-secondary" key={brand._id}>
                        <Link to=''><img src={brand.image} alt="brand" className='pt-5' /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;