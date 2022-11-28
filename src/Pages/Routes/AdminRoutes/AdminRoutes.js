import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import LoadingSpiner from '../../Shared/LoadingSpiner/LoadingSpiner';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};


export default AdminRoutes;