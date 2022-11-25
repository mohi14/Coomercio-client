import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
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
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
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
    }
])