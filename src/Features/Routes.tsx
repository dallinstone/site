import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Budgenvelopes from "../Components/Budgenvelopes";
import Experience from "../Components/Experience/Experience";
import NotFound from "../Components/NotFound";
import Portfolio from "../Components/Portfolio";
import RouteError from "../Components/RouteError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "resume", element: <Experience /> },
      { path: "experience", element: <Navigate to="/resume" replace /> },
      { path: "projects", element: <Navigate to="/#work" replace /> },
      { path: "contact", element: <Navigate to="/#contact" replace /> },
      { path: "about", element: <Navigate to="/#about" replace /> },
      { path: "budgenvelopes", element: <Budgenvelopes /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
