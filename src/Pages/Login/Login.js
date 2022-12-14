import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';




const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { SignIn, SignInWithGoogle, setLoading } = useContext(AuthContext)
    const [logInError, setLogInError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const navigate = useNavigate();
    const location = useLocation();
    const [buttonLoading, setButtonLoading] = useState(false)


    const from = location.state?.from?.pathname || '/'

    if (token) {
        // navigate(from, { replace: true });
    }

    const handleLogIn = data => {
        setButtonLoading(true)
        setLogInError('')
        SignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success(`Welcome back ${user?.displayName}`)
                setLoginUserEmail(data.email)
                setButtonLoading(false)
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })

    }

    const handleLoginWithGoogle = () => {
        setButtonLoading(true)
        SignInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email, 'Buyer')
                toast.success(`Welcome back ${user?.displayName}`)
                setButtonLoading(false)
            })
            .catch(error => (console.error(error)))
            .finally(() => {
                setLoading(false)
            }
            )
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://coomercio-server-mohi14.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email)
                navigate(from, { replace: true });
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
                <button className=" btn btn-neutral w-full" onClick={handleLoginWithGoogle} ><FcGoogle className='text-2xl mr-3' /> Continue with Google</button>

                <p className='mt-2'>Don't have any Account? <Link className='text-secondary' to='/register'>Please Register.</Link></p>
                {logInError && <p className='text-red-600'>{logInError}</p>}

            </div>
        </div>
    );
};

export default Login;