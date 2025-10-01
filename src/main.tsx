import { createRoot } from "react-dom/client";
import "./index.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "@/pages/homepage";
import { StrictMode } from "react";
import { Provider } from "./components/ui/provider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />,
        </Provider>
    </StrictMode>,
);
