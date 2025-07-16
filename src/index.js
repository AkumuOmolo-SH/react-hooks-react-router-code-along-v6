import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "../components/NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

const router = createBrowserRouter([
 {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  },
{
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />
  },
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <UserProfile />
  },
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);