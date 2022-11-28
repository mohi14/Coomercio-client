import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, SignInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setUsers(data)
    //         })
    // }, [users])

    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                        // navigate('/')
                    })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
    }

    const handleSignUpWithGoogle = () => {
        SignInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email, 'Buyer')

            })
            .catch(error => {
                console.error(error)
            })

    }

    const saveUser = (name, email, role) => {
        const status = false;
        const user = { name, email, role, status };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                // getUserToken(email)
            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)
    //                 navigate('/')
    //             }
    //         })
    // }
    return (
        <div className='py-36'>
            <div className='w-4/5 lg:w-1/4 p-7 shadow-2xl m-auto rounded-lg px-10 pb-20'>
                <h2 className='text-3xl text-center mb-10 font-bold'>Register Now!</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered  " />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 character or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be contain a capital letter and a special character.' }
                            })}

                            className="input input-bordered w-full " />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className="label-text">Register As</span></label>
                    <select className="select select-bordered w-full " {...register("role")} defaultValue='Buyer'>

                        <option >Buyer</option>
                        <option>Seller</option>
                    </select>
                    <input className='btn btn-primary text-white w-full mt-4' value='Register' type="submit" />
                </form>
                <div className="divider">OR</div>
                <button className=" btn btn-neutral w-full" onClick={handleSignUpWithGoogle}><FcGoogle className='text-2xl mr-3' /> Continue with Google</button>
                <p className='mt-2'>Already Have an Account? <Link className='text-secondary' to='/login'>Please Login.</Link></p>
                {signUpError && <p className='text-red-600'>{signUpError}</p>}

            </div>
        </div>

        // <div className='h-[800px] flex justify-center items-center'>
        //     <div className='w-96 p-7'>
        //         <h2 className='text-xl text-center'>Signup</h2>
        //         <form onSubmit={handleSubmit(handleSignUp)}>
        //             <div className="form-control w-full max-w-xs">
        //                 <label className="label"><span className="label-text">Name</span></label>
        //                 <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
        //                 {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
        //             </div>
        //             <div className="form-control w-full max-w-xs">
        //                 <label className="label"><span className="label-text">Email</span></label>
        //                 <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
        //                 {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
        //             </div>
        //             <div className="form-control w-full max-w-xs">
        //                 <label className="label"><span className="label-text">Password</span></label>
        //                 <input type="password" {...register("password",
        //                     {
        //                         required: 'Password is required',
        //                         minLength: { value: 6, message: 'Password must be 6 character or longer' },
        //                         pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be strong' }
        //                     })} className="input input-bordered w-full max-w-xs" />
        //                 {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
        //             </div>
        //             <input className='btn btn-accent w-full mt-4' value='Signup' type="submit" />
        //             {signupError && <p className='text-red-600'>{signupError}</p>}
        //         </form>
        //         <p>Already Have an Account? <Link className='text-secondary' to='/login'>Please Login.</Link></p>
        //         <div className="divider">OR</div>
        //         <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        //     </div>
        // </div>
    );
};

export default SignUp;