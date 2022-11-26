import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {}
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