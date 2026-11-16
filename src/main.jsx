import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    
      <RouterProvider router={route} />
      <Toaster
        position="bottom-right"
        toastOptions={{ style: { background: "#2563eb", color: "#ffffff" } }}
      />
    </QueryClientProvider>
  </StrictMode>,
);
