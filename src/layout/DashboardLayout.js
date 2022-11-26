import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email)

    const activeClassName = 'bg-[#DE831B]'
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-[105px]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  mt-[105px]">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-10 w-80 text-white font-semibold text-lg bg-primary ">
                        <li ><NavLink to='/dashboard' className={({ isActive }) =>
                            isActive ? activeClassName : ''}>My Orders</NavLink></li>
                        {
                            isBuyer && <>
                                <li className=''><NavLink to='/myWishlist' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Wishlist</NavLink></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Products</NavLink></li>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>Add Product</NavLink></li>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Buyers</NavLink></li>

                            </>

                        }
                        {
                            isAdmin && <>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>All Sellers</NavLink></li>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>All Buyers</NavLink></li>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>Reported Items</NavLink></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;