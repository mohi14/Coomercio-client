import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbShoppingCart } from "react-icons/tb";
import { AuthContext } from '../../../contexts/AuthProvider';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const activeClassName = 'border-2 border-primary rounded-full'
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>
        <li><NavLink to='/home' className={({ isActive }) =>
            isActive ? activeClassName : ''}>Home</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) =>
            isActive ? activeClassName : ''}>Blog</NavLink></li>


        {
            user?.uid ?
                <>
                    <li><NavLink to='/dashboard' className={({ isActive }) =>
                        isActive ? activeClassName : ''}>Dashboard</NavLink></li>
                    <li><button onClick={handleLogOut} className='btn btn-primary  text-white rounded-full lg:mt-1 lg:ml-4 '>Sign Out</button></li>
                </>
                :
                <li><Link to='/login' className='btn btn-primary  text-white rounded-full lg:mt-1 lg:ml-4 lg:w-24 '>Login</Link></li>
        }

    </React.Fragment>
    return (
        <div className="navbar bg-base-100 shadow-md fixed  py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl lg:text-4xl lg:ml-[185px] font-bold text-neutral">C<TbShoppingCart className='text-primary' />MERCIO</Link>
            </div>

            <div className="navbar-end lg:mr-[200px] ">
                <div className=" hidden lg:flex text-xl font-semibold mr-3">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div >
                    {
                        user?.uid ?
                            <>{
                                user?.photoURL ?
                                    <>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full lg:ml-3">
                                                <img src={user?.photoURL} alt='' />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <CgProfile className='text-3xl font-semibold lg:ml-3' />
                            }
                            </>
                            : ''
                    }

                </div>
                <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="dashboard-drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;