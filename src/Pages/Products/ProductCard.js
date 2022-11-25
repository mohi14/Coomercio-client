import React from 'react';
import { FcManager, FcApproval, FcCellPhone, FcCalendar } from "react-icons/fc";
import { HiUser } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { name, image, location, condition, description, original_price, posted_time, resale_price, sellers_name, use_time, sellerVerified, mobile_number } = product;
    return (
        <div className='grid lg:grid-cols-8'>
            <div className='  lg:col-start-2 lg:col-end-6'>
                <img src={image} alt="" className='w-full h-[500px]' />
            </div>
            <div className=' lg:col-span-2 p-10 bg-gray-300 '>
                <div className='flex items-center'>
                    <p className='mr-3 text-2xl'><HiUser /></p>
                    <p className='mr-1 text-xl font-semibold'>{sellers_name}</p>
                    {
                        sellerVerified && <p><FcApproval /></p>
                    }
                </div>
                {
                    sellerVerified
                        ? <div className="badge badge-sm badge-secondary ">Verified Seller</div>
                        :
                        <div className="badge badge-sm badge-neutral ">Not Verified</div>
                }
                <div className='mt-4 flex items-center'>
                    <p><FcCellPhone className='text-lg mr-2 ' /></p><p className='font-semibold'>{mobile_number}</p>
                </div>
                <div className='mt-1 flex items-center'>
                    <p><GoLocation className='text-lg mr-2 ' /></p><p className='font-semibold'>{location}</p>
                </div>
                <div className='mt-1 flex items-center'>
                    <p><FaCalendarAlt className='text-lg mr-2 ' /></p><p className='font-semibold'>{posted_time}</p>
                </div>
            </div>
            <div className=' lg:col-start-2 lg:col-end-8 bg-gray-300 shadow-lg p-10'>
                <div className='text-4xl font-bold'>
                    {name}
                </div>
                <div className='flex gap-5 mt-5 lg:mt-4 '>
                    <p className='text-lg font-semibold '><del>Original Price: <span>${original_price}</span></del></p>
                    <p className='text-2xl font-semibold'>Resale Price: <span className='text-primary'>${resale_price}</span></p>
                </div>
                <div className='flex flex-col gap-8 lg:flex-row lg:justify-between mt-4 lg:mt-0'>
                    <div className='flex gap-5 mt-4 '>
                        <p className='text-lg font-semibold'>Use Time: <span className='font-normal'>{use_time}</span></p>
                        <p className='text-lg font-semibold'>Condition: <span className='font-normal'>{condition}</span></p>
                    </div>
                    <div>
                        <button className='btn btn-secondary'>Add to Wishlist</button>
                        <button className='ml-5 text-white btn btn-primary'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;