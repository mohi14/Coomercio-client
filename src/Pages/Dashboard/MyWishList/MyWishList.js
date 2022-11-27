import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const MyWishList = () => {
    const { user } = useContext(AuthContext)


    const { data: wishlists = [], isLoading } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlists?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })



    if (isLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div className='max-w-[1400px] m-auto mt-10'>
            <h1 className='text-3xl font-bold mb-5'>My Wishlist</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>

                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlists.map((wishlist, i) => <tr key={wishlist._id} className="hover">
                                <th>{i + 1}</th>
                                <td> <div className="w-24 rounded-xl">
                                    <img src={wishlist.image} alt="" />
                                </div></td>
                                <td className='font-bold'>{wishlist.productName}</td>
                                <td>${wishlist.price}</td>

                                <td>
                                    {
                                        wishlist.price && !wishlist.paid && <Link to={`/dashboard/buy/${wishlist._id}`}><button className='btn btn-xs btn-neutral'>Buy</button></Link>


                                    }

                                    {
                                        wishlist.price && wishlist.paid && <span className='text-accent'>Purchased</span>
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

export default MyWishList;