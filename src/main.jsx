import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
    <Toaster
      position="bottom-right"
      toastOptions={{ style: { background: "#2563eb", color: "#ffffff" } }}
    />
  </StrictMode>,
);
