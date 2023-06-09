import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterRBS from "./components/registerRBS/registerRBS";
import RegisterBS from "./components/RegisterBs/RegisterBS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/registerRBS',
        element : <RegisterRBS/>
      },
      {
        path : '/registerBs',
        element : <RegisterBS/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);