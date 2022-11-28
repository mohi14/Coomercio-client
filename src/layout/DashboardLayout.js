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

    // isSellerLoading, isAdminLoading isBuyerLoading

    const activeClassName = 'bg-[#DE831B]'

    // if (isSellerLoading) {
    //     return <progress className="progress w-56"></progress>
    // }

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
                    <div className="menu p-10 w-80 text-white font-semibold text-lg bg-primary ">

                        {/* {
                            isBuyerLoading && isSellerLoading && isAdminLoading ?
                                <progress className="progress w-56"></progress>
                                :

                                <>
                                    <li ><NavLink to='/dashboard/myOrders' className={({ isActive }) =>
                                        isActive ? activeClassName : ''}>My Orders</NavLink></li>
                                    {
                                        isBuyer && <>
                                            <li className=''><NavLink to='/dashboard/myWishlist' className={({ isActive }) =>
                                                isActive ? activeClassName : ''}>My Wishlist</NavLink></li>
                                        </>
                                    }
                                    {
                                        isSeller && <>
                                            <li className=''><NavLink to='/dashboard/myProducts' className={({ isActive }) =>
                                                isActive ? activeClassName : ''}>My Products</NavLink></li>
                                            <li className=''><NavLink to='/dashboard/addProduct' className={({ isActive }) =>
                                                isActive ? activeClassName : ''}>Add Product</NavLink></li>
                                            <li className=''><NavLink to='/dashboard/myBuyers' className={({ isActive }) =>
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
                                </>
                        } */}

                        <li ><NavLink to='/dashboard/myOrders' className={({ isActive }) =>
                            isActive ? activeClassName : ''}>My Orders</NavLink></li>
                        {
                            isBuyer && <>
                                <li className=''><NavLink to='/dashboard/myWishlist' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Wishlist</NavLink></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className=''><NavLink to='/dashboard/myProducts' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Products</NavLink></li>
                                <li className=''><NavLink to='/dashboard/addProduct' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>Add Product</NavLink></li>
                                <li className=''><NavLink to='/dashboard/myBuyers' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>My Buyers</NavLink></li>

                            </>

                        }
                        {
                            isAdmin && <>
                                <li className=''><NavLink to='/dashboard/allSellers' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>All Sellers</NavLink></li>
                                <li className=''><NavLink to='/dashboard/allBuyers' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>All Buyers</NavLink></li>
                                <li className=''><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? activeClassName : ''}>Reported Items</NavLink></li>
                            </>
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;