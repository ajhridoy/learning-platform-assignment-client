import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Header/Home/Home/Home";
import Signin from "../../Pages/Signin/Signin";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
        ]
    }
])