import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://coomercio-server-mohi14.vercel.app/myProducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = product => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F28C18',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coomercio-server-mohi14.vercel.app/myProducts/${product._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': ' application/json',
                        authorization: `bearer ${localStorage.getItem('coomercioToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            toast.success(`${product.name} deleted successfully`)
                        }
                    })
            }
        })


    }

    const handleAdvertise = product => {
        fetch(`https://coomercio-server-mohi14.vercel.app/advertisement/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('coomercioToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Advertisement Successful!',
                        `The advertisement of ${product.name} will show in Homepage`,
                        'success'
                    )
                }
            })
    }

    if (isLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div className='w-11/12 m-auto mt-16'>
            <h1 className='text-3xl font-bold mb-5'>My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Posting Time</th>
                            <th>Sales Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((myProduct, i) => <tr key={myProduct._id} className="hover">
                                <th>{i + 1}</th>
                                <td> <div className="w-24 rounded-xl">
                                    <img src={myProduct.image} alt="" />
                                </div></td>
                                <td className='font-bold'>{myProduct.name}</td>
                                <td className='text-primary'>${myProduct.resale_price}</td>
                                <td>{myProduct.posted_time}</td>
                                <td>
                                    {
                                        myProduct.paid ?
                                            <span className='text-green-500'>Sold</span>
                                            :
                                            <span className='text-secondary'>Available</span>
                                    }
                                </td>
                                <td>
                                    {
                                        myProduct.paid && ''
                                    }
                                    {
                                        !myProduct.paid && !myProduct.advertisement && <button className='btn btn-success btn-xs text-white' onClick={() => handleAdvertise(myProduct)}>Advertise</button>

                                    }
                                    {
                                        !myProduct.paid && myProduct.advertisement && <span className='text-info'>On Advertise</span>
                                    }
                                </td>
                                <td><button className='btn btn-error btn-xs text-white' onClick={() => handleDelete(myProduct)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;