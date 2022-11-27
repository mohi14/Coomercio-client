import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const AdvertiseMent = () => {

    const { data: advertisements = [], isLoading } = useQuery({
        queryKey: ['advertisements'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisement');
            const data = await res.json();
            return data;
        }
    })

    if (advertisements.length === 0) {
        return <></>
    }

    if (isLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div className='max-w-[1500px] m-auto my-16'>
            <div className='text-center mb-8'>
                <h2 className='text-4xl font-bold mb-10'>Advertise Laptops</h2>

                <marquee behavior="scroll" direction="" className='bg-primary text-white p-5 text-2xl '>Today's Great deals. Buy pre-owned laptops at cheapest price.</marquee>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    advertisements.map(advertisement => <div className="card bg-base-100 static w-full rounded-lg shadow-xl border-2 border-secondary">
                        <img src={advertisement.image} alt="Shoes" className='rounded-t-lg h-[200px] w-auto' />
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{advertisement.name}</h2>
                            <div className=''>
                                <span className='font-semibold mr-3'><del>${advertisement.original_price}</del></span>
                                <span className='font-semibold text-primary text-xl'>${advertisement.resale_price}</span>
                            </div>
                            <div className="card-actions justify-end mt-5">
                                <button className="btn btn-secondary text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AdvertiseMent;