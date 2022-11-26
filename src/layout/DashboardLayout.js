import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-[105px]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  mt-[105px] fixed h-full">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-primary ">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {/* {
                        isAdmin && <>
                            <li><Link to='/dashboard/allusers'>All users</Link></li>
                            <li><Link to='/dashboard/add-doctor'>Add a Doctor</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
                        </>
                    } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;