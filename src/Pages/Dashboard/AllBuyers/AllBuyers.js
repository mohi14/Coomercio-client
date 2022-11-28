import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';
const AllBuyers = () => {
    const [buyers, setBuyers] = useState([])
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false)

    useEffect(() => {

        fetch('https://coomercio-server-mohi14.vercel.app/buyers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('coomercioToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // setLoading(true)

                setBuyers(data)
                // setLoading(false)

            })
    }, [buyers])


    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    }

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
                setButtonLoading(true)
                fetch(`https://coomercio-server-mohi14.vercel.app/buyers/${user._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': ' application/json',
                        authorization: `bearer ${localStorage.getItem('coomercioToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch();
                            setButtonLoading(false)
                            toast.success(`${user.name} deleted successfully`)
                        }
                    })
            }
        })


    }


    return (
        <div className='w-11/12 m-auto mt-16'>
            <h1 className='text-3xl font-bold mb-5'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id} className="hover">
                                <th>{i + 1}</th>
                                <td className='font-bold'>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    {
                                        buttonLoading ? <button className="btn loading btn-error btn-xs text-white">Deleting..</button>
                                            :
                                            <button className='btn btn-error btn-xs text-white' onClick={() => handleDelete(buyer)}>Delete</button>
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

export default AllBuyers;