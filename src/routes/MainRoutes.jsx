import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/auth/login/Login";
import Heart from "../pages/heart/Heart";
import Cart from "../pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import Add from "../pages/add/Add";
import Check from "../pages/check/Check";
import Register from "../pages/auth/register/Register";
import Admin from "../components/admin/Admin";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/add",
      element: <Add />,
    },
    {
      link: "/about",
      element: <About />,
    },
    {
      link: "/contact",
      element: <Contact />,
    },
    {
      link: "/signUp",
      element: <Login />,
    },
    {
      link: "/register",
      element: <Register />,
    },
    {
      link: "/heart",
      element: <Heart />,
    },
    {
      link: "/cart",
      element: <Cart />,
    },
    {
      link: "/check",
      element: <Check />,
    },
    {
      link: "/admin",
      element: <Admin />,
    },
  ];
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
