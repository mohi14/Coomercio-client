import React, { useContext, useState } from 'react';
import { FcApproval, FcCellPhone } from "react-icons/fc";
import { HiUser } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import BookingModal from '../Shared/BookingModal/BookingModal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const ProductCard = ({ product }) => {
    const { name, image, location, condition, description, original_price, posted_time, resale_price, sellers_name, use_time, sellerVerified, mobile_number, _id } = product;

    const [closeModal, setCloseModal] = useState(false)
    const { user } = useContext(AuthContext)

    const [button, setButton] = useState(false)
    const [bookingButton, setBookingButton] = useState(false)

    const handleModal = () => {
        setCloseModal(true)
    }



    const handleWishlist = () => {

        const wishlist = {
            productName: name,
            price: resale_price,
            image,
            productCode: _id,
            email: user.email

        }

        fetch('https://coomercio-server-mohi14.vercel.app/wishlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                headers: {
                    authorization: `bearer ${localStorage.getItem('coomercioToken')}`
                }
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product added to your wishlist. Please Check it on Dashboard.')
                    setButton(true)
                }
                else {
                    toast.error(data.message)
                }
            })
    }
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

                <div className='mt-5'>
                    <h1 className='text-xl font-semibold'>Product Configuration</h1>
                    {
                        description?.Processor ?
                            <>
                                <p className='font-semibold'>Processor: <span className='font-normal'>{description.Processor}</span></p>
                                <p className='font-semibold'>Graphics: <span className='font-normal'>{description.Graphics}</span></p>
                                <p className='font-semibold'>Display
                                    : <span className='font-normal'>{description.Display}</span></p>
                                <p className='font-semibold'>Memory: <span className='font-normal'>{description.Memory}</span></p>
                                <p className='font-semibold'>Storage: <span className='font-normal'>{description.Storage}</span></p>
                                <p className='font-semibold'>Battery
                                    : <span className='font-normal'>{description.Battery
                                    }</span></p>
                                <p className='font-semibold'>Operating: <span className='font-normal'>{description.Operating}</span></p>
                            </>
                            :
                            ''
                    }
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
                        <button className='btn btn-secondary' onClick={handleWishlist} disabled={button}>Add to Wishlist</button>
                        <label
                            htmlFor="bookingModal"
                            className="btn btn-primary text-white mt-5 ml-4"
                            onClick={handleModal} disabled={bookingButton}>Book now</label>
                    </div>
                    {
                        closeModal && <BookingModal
                            product={product}
                            setCloseModal={setCloseModal}
                            setBookingButton={setBookingButton}></BookingModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;