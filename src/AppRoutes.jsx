import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard";
import Department from "./Department";
import Products from "./Products";
import Common from "./Common";
import AddProduct from "./AddProduct";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Common />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "products/:productname",
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "*",
        element: <DashBoard />,
      },
    ],
  },
]);

export default AppRouter;
