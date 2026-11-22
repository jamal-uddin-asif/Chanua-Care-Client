import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import AddMedicine from "@/pages/AddMedicine";
import MedicineDetails from "@/pages/Medicine/MedicineDetails";
import PrivateRoute from "./PrivateRoute";
import Register from "@/pages/Auth/Register/Register.jsx";
import Login from "@/pages/Auth/SignIn/Login";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-medicine",
        element: (
          <PrivateRoute>
            <AddMedicine />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/medicine/:id",
        element: (
          <PrivateRoute>
            <MedicineDetails />
          </PrivateRoute>
        ),
      },
      //   auth route
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
