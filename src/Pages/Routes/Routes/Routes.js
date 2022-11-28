import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import MyBuyers from "../../Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import BuyWishlistProduct from "../../Dashboard/MyWishList/BuyWishlistProduct";
import MyWishList from "../../Dashboard/MyWishList/MyWishList";
import ReportedItems from "../../Dashboard/ReportedItems/ReportedItems";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
import Payment from "../../Payment/Payment";
import Products from "../../Products/Products";
import SignUp from "../../SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
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
                loader: ({ params }) => fetch(`https://coomercio-server-mohi14.vercel.app/category/${params.id}`)
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
                loader: ({ params }) => fetch(`https://coomercio-server-mohi14.vercel.app/bookings/${params.id}`)
            },
            {
                path: '/dashboard/myWishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/buy/:id',
                element: <BuyWishlistProduct></BuyWishlistProduct>,
                loader: ({ params }) => fetch(`https://coomercio-server-mohi14.vercel.app/wishlists/${params.id}`)
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoutes><MyBuyers></MyBuyers></SellerRoutes>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems><AdminRoutes></AdminRoutes></ReportedItems>
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