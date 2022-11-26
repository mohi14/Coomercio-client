import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ product, setCloseModal }) => {
    const { name, resale_price } = product;
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            price: resale_price,
            buyerName,
            email,
            phone,
            location
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
                    setCloseModal(false)
                    toast.success('Booking Successful. Please check your dashboard for payment.')
                }
                else {
                    toast.error(data.message)
                    setCloseModal(false)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <p className='mt-3 text-xl font-semibold text-primary'>${resale_price}</p>
                    <form className='grid grid-cols-1 gap-3 mt-5' onSubmit={handleBooking}>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email Address" className="input w-full input-bordered" readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input type="submit" value='Submit' className='w-full  btn btn-neutral' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;