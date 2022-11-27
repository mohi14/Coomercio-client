import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BuyWishlistProduct = () => {
    const wishlist = useLoaderData()
    const { productName, price, image, _id } = wishlist;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName,
            price,
            buyerName,
            email,
            phone,
            location,
            image,
            productCode: _id

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Booking Successful. Now pay the bill.')
                    navigate('/dashboard/myOrders')
                }
                else {
                    toast.error(data.message)
                    navigate('/dashboard/myOrders')
                }
            })

    }
    return (
        <div className=' mt-24'>
            <h1 className=' text-4xl text-center w-2/5 m-auto'>Want to buy <strong>{productName}</strong> at <strong>${price}</strong> ? You need to set a booking first.</h1>
            <form className='grid grid-cols-1 gap-3 mt-10 w-1/4 m-auto' onSubmit={handleBooking}>
                <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" readOnly />
                <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email Address" className="input w-full input-bordered" readOnly />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                <br />
                <input type="submit" value='Submit' className='w-full  btn btn-neutral' />
            </form>
        </div>
    );
};

export default BuyWishlistProduct;