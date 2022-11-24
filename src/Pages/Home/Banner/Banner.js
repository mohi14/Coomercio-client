import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='max-w-[1500px] lg:m-auto  lg:flex justify-center gap-5 items-center lg:pt-40 lg:pb-24'>
            <div className='lg:w-1/2 w-4/5 m-auto pt-28 pb-10 lg:pt-0'>
                <h1 className='lg:text-6xl text-2xl font-bold'>BUY AND SELL CERTIFIED PRE-OWNED LAPTOPS</h1>
                <h3 className='lg:text-4xl text-xl lg:w-3/4 font-semibold lg:mt-10 text-accent mt-4 typewriter'>DAILY DEALS. FREE SHIPPING</h3>
            </div>
            <div className='lg:w-1/2 w-4/5 m-auto'>
                <video loop autoPlay muted className='w-3/4 lg:ml-auto'>
                    <source src={require('../../../assets/bannervideo.mp4')} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Banner;