import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App";
import Home from "./Home/Home";
import Tv from "./TV/Tv";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "movies/:movieId",
            element: <Home />
        },
        {
            path: "tvs/:tvId",
            element: <Home />

        },
        {
            path: "tv",
            element: <Tv />
        },

    ]
}]);



function Router() {

    return (

        <RouterProvider router={router} />

    );
};

export default Router;