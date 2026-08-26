import { lazy, ReactElement, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Budgenvelopes from "../Components/Budgenvelopes";
import HomePage from "../Components/HomePage";
import RouteError from "../Components/RouteError";

const About = lazy(() => import("../Components/About"));
const Contact = lazy(() => import("../Components/Contact"));
const Experience = lazy(() => import("../Components/Experience/Experience"));
const NotFound = lazy(() => import("../Components/NotFound"));
const Projects = lazy(() => import("../Components/Projects"));

function deferred(element: ReactElement) {
  return <Suspense fallback={<p className="page-loading" role="status">Loading page…</p>}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "experience", element: deferred(<Experience />) },
      { path: "projects", element: deferred(<Projects />) },
      { path: "contact", element: deferred(<Contact />) },
      { path: "about", element: deferred(<About />) },
      { path: "budgenvelopes", element: <Budgenvelopes /> },
      { path: "*", element: deferred(<NotFound />) },
    ],
  },
]);
