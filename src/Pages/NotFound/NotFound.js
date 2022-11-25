import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/pageNotFound.png'

const NotFound = () => {
    return (
        <div className='max-w-[500px] m-auto mt-36'>
            <div>
                <img src={image} alt="" className='' />
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mt-10 mb-5'>The page you are looking for does not exist.</h1>
                <Link to='/'><button className='btn btn-neutral'>Go to Homepage</button></Link>
            </div>
        </div>
    );
};

export default NotFound;