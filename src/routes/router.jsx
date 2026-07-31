import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import AddMedicine from "@/pages/AddMedicine";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-medicine',
                Component: AddMedicine
            },
            {
                path: '/about-us',
                Component: AboutUs
            }
        ]
    }
])