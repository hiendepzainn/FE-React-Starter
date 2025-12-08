import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AppLayout from "./layout";
import UserPage from "./pages/user";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UserPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <div>hello LOGIN</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
