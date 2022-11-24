import React from 'react';

const WhyCoomercio = () => {
    return (
        <div className='my-28 max-w-[1500px] m-auto'>
            <h1 className='text-center text-4xl font-bold mb-5'>Why Coomercio?</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 my-16'>
                <div className='text-center lg:col-span-2 p-10'>
                    <img src='https://buy.gadgetsalvation.com/media/svg_img/customer-logo.svg' alt="" className='m-auto' />
                    <h4 className='text-2xl font-semibold my-8'>We care about our customers and the planet</h4>
                    <p className='font-semibold text-gray-500'>We began Coomercio back in 2018 to give used laptops a new life. Since then, we've saved thousands of  laptops and more from landfills, and paid our customers in the process.</p>
                </div>
                <div className='text-center lg:col-span-2 p-10'>
                    <img src='https://buy.gadgetsalvation.com/media/svg_img/easy-logo.svg' alt="" className='m-auto' />
                    <h4 className='text-2xl font-semibold my-8'>Thoroughly Tested</h4>
                    <p className='font-semibold text-gray-500'>All our laptops are inspected thoroughly to guarantee 100% functionality. Listings show pictures of the actual item you'll receive. Not a generic picture.</p>
                </div>
                <div className='text-center lg:col-start-2 lg:col-span-2 p-10'>
                    <img src='https://buy.gadgetsalvation.com/media/svg_img/tech-logo.svg' alt="" className='m-auto' />
                    <h4 className='text-2xl font-semibold my-8'>Why Buy Pre-Owned?</h4>
                    <p className='font-semibold text-gray-500'>One main reason: to significantly save you money while reducing your carbon footprint. Resell, reuse, reduce. That's our motto.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyCoomercio;