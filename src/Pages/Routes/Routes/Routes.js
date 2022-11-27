import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import MyBuyers from "../../Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import BuyWishlistProduct from "../../Dashboard/MyWishList/BuyWishlistProduct";
import MyWishList from "../../Dashboard/MyWishList/MyWishList";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
import Payment from "../../Payment/Payment";
import Products from "../../Products/Products";
import SignUp from "../../SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SelleRoutes/SellerRoutes";


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
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/myWishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/buy/:id',
                element: <BuyWishlistProduct></BuyWishlistProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/wishlists/${params.id}`)
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
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