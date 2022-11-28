import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('coomercioToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    return (
        <div className='max-w-[1400px] m-auto mt-16'>
            <h1 className='text-3xl font-bold mb-5'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id} className="hover">
                                <th>{i + 1}</th>
                                <td> <div className="w-24 rounded-xl">
                                    <img src={booking.image} alt="" />
                                </div></td>
                                <td className='font-bold'>{booking.productName}</td>
                                <td className='text-primary'>${booking.price}</td>
                                <td>{booking.location}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-secondary btn-sm'>Pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-accent'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;