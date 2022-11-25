import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { SignIn, SignInWithGoogle, user } = useContext(AuthContext)
    const [logInError, setLogInError] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])

    const handleLogIn = data => {
        setLogInError('')
        SignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success(`Welcome back ${user?.displayName}`)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })
    }

    const handleLoginWithGoogle = () => {
        SignInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                const userCheck = users.find(usr => usr.email === user.email);

                if (!userCheck) {
                    saveUser(user.displayName, user.email, 'Buyer')
                }
                toast.success(`Welcome back ${user?.displayName}`)
                navigate('/')
            })
            .catch(error => (console.error(error)))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='py-36'>
            <div className='w-4/5 lg:w-1/4 p-7 shadow-2xl m-auto rounded-lg px-10 pb-20'>
                <h2 className='text-3xl text-center mb-10 font-bold'>Login Now!</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered  " />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required" })}

                            className="input input-bordered w-full " />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary text-white w-full mt-4' value='Login' type="submit" />
                </form>
                <div className="divider">OR</div>
                <button className=" btn btn-neutral w-full" onClick={handleLoginWithGoogle}><FcGoogle className='text-2xl mr-3' /> Continue with Google</button>
                <p className='mt-2'>Don't have any Account? <Link className='text-secondary' to='/register'>Please Register.</Link></p>
                {logInError && <p className='text-red-600'>{logInError}</p>}

            </div>
        </div>
    );
};

export default Login;