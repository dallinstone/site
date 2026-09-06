import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Budgenvelopes from "../Components/Budgenvelopes";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience/Experience";
import HomePage from "../Components/HomePage";
import NotFound from "../Components/NotFound";
import Projects from "../Components/Projects";
import RouteError from "../Components/RouteError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "budgenvelopes", element: <Budgenvelopes /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
