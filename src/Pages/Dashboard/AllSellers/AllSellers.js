import React, { useContext, useEffect, useState } from 'react';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSellers = () => {
    // const { user } = useContext(AuthContext)
    const [sellers, setSellers] = useState([])
    // const { data: sellers = [user], isLoading, refetch } = useQuery({
    //     queryKey: ['sellers'],
    //     queryFn: async () => {
    //         const res = await fetch('https://coomercio-server-mohi14.vercel.app/sellers');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    useEffect(() => {
        fetch('https://coomercio-server-mohi14.vercel.app/sellers')
            .then(res => res.json())
            .then(data => {
                setSellers(data)
            })
    }, [sellers])



    // const sellers = useLoaderData()
    // if (isLoading) {
    //     return <LoadingSpiner></LoadingSpiner>
    // }
    // refetch()
    // const navigation = useNavigation()
    // if (navigation.state === 'loading') {
    //     return <LoadingSpiner></LoadingSpiner>
    // }
    const handleDelete = user => {
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
                fetch(`https://coomercio-server-mohi14.vercel.app/sellers/${user._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': ' application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch();
                            toast.success(`${user.name} deleted successfully`)
                        }
                    })
            }
        })


    }


    const handleVerify = user => {
        fetch(`https://coomercio-server-mohi14.vercel.app/sellers/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire(
                        'Verification Successful!',
                        `${user.name} is now a verify seller.`,
                        'success'
                    )
                }
            })
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
                                <td className='font-bold'>{seller.name} {seller.status && <FcApproval className='inline mb-1' />}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        seller.status ?
                                            <span className='text-green-500'>Verified</span>
                                            : <button className='btn btn-xs btn-secondary' onClick={() => handleVerify(seller)}>Verify</button>
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