import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const AllSellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {

    }

    if (isLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    return (
        <div className='w-11/12 m-auto mt-16'>
            <h1 className='text-3xl font-bold mb-5'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i + 1}</th>
                                <td className='font-bold'>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        !seller.status ?
                                            <span className='text-green-500'>Verified</span>
                                            : <button className='btn btn-xs btn-secondary'>Verify</button>
                                    }

                                </td>
                                <td><button className='btn btn-error btn-xs text-white' onClick={() => handleDelete(seller)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;