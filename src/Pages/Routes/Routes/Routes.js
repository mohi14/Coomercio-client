import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
import Payment from "../../Payment/Payment";
import Products from "../../Products/Products";
import SignUp from "../../SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])