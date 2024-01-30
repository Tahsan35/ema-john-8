import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders.jsx";
import cartProductsLoader from "./loaders/cartProductsLoader.js";
import Inventory from "./components/Inventory/Inventory.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
