import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import DashBoard from "../pages/DashBoard";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import SellProducts from "../pages/SellProducts";
import DeleteProducts from "../pages/DeleteProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "sellProduct",
        element: <SellProducts></SellProducts>,
      },
      {
        path: "deleteProducts",
        element: <DeleteProducts></DeleteProducts>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);

export default router;
