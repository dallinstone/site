import { RouteObject } from "react-router";
import HomePage from "../Components/HomePage";
import Experience from "../Components/Experience/Experience";
import Contact from "../Components/Contact";
import About from "../Components/About";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            
            { path: 'home', element: <HomePage /> },
            { path: 'experience', element: <Experience /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
        ]
    }

 
]

export const router = createBrowserRouter(routes);