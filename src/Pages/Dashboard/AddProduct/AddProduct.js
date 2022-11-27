import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)

    const [buttonLoading, setButtonLoading] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgBB_key
    const navigate = useNavigate()

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const posted_time = `${date}  ${time}`



    const handleAddProduct = data => {
        setButtonLoading(true)
        const image = data.img[0];
        const fromData = new FormData();
        fromData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        category_Id: data.category,
                        name: data.name,
                        location: data.location,
                        image: imgData.data.url,
                        description: data.description,
                        original_price: data.original_price,
                        posted_time,
                        resale_price: data.resale_price,
                        sellers_name: user?.displayName,
                        seller_email: user?.email,
                        use_time: data.useTime,
                        mobile_number: data.number,
                        condition: data.condition
                    }
                    fetch('http://localhost:5000/laptops', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is added successfully`)
                            setButtonLoading(false)
                            navigate('/dashboard/myProducts')
                        })
                }


            })

    }


    return (
        <div className='max-w-[1400px] m-auto mt-16 w-3/4 lg:w-full mb-32 lg:mb-0'>
            <h1 className='text-3xl font-bold mb-5'>Add a Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)} >
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", { required: "Product Name is required" })} className="input input-bordered w-full " />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Select Category</span></label>
                        <select className="select select-bordered w-full " {...register("category")} defaultValue='HP'>
                            <option >HP</option>
                            <option>Dell</option>
                            <option>Acer</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="number" {...register("original_price", { required: "Original Price is required" })} className="input input-bordered w-full " />
                        {errors.original_price && <p role="alert" className='text-red-600'>{errors.original_price?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Resale Price</span></label>
                        <input type="number" {...register("resale_price", { required: "Resale Price is required" })} className="input input-bordered w-full " />
                        {errors.resale_price && <p role="alert" className='text-red-600'>{errors.resale_price?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Choose Condition</span></label>
                        <select className="select select-bordered w-full " {...register("condition")} defaultValue='Excellent'>
                            <option >Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>
                    <div>
                        <label className="label"><span className="label-text">How long you use it?</span></label>
                        <input type="text" {...register("useTime", { required: "Use time is required" })} className="input input-bordered w-full " />
                        {errors.useTime && <p role="alert" className='text-red-600'>{errors.useTime?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" {...register("location", { required: "Location is required" })} className="input input-bordered w-full " />
                        {errors.location && <p role="alert" className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Mobile Number</span></label>
                        <input type="number" {...register("number", { required: "Mobile Number is required" })} className="input input-bordered w-full " />
                        {errors.number && <p role="alert" className='text-red-600'>{errors.number?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Product Photo</span></label>
                        <input type="file" {...register("img", { required: "Product photo is required" })} className="file-input file-input-bordered w-full" />
                        {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
                    </div>
                    <div className='lg:col-span-2'>
                        <label className="label"><span className="label-text">Product Description</span></label>
                        <textarea className="textarea textarea-bordered w-full col-" {...register("description", { required: "Product description is required" })} placeholder="Describe about your product."></textarea>
                        {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                    </div>

                </div>
                <div className='mt-8 m-auto lg:w-1/5'>
                    {
                        buttonLoading ?
                            <button className="btn loading btn-primary w-full text-white">Adding....</button>
                            :
                            <input className='btn btn-primary text-white  w-full' value='Add Product' type="submit" />
                    }
                </div>

            </form>
        </div>
    );
};

export default AddProduct;