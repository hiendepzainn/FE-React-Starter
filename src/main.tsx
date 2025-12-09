import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AppLayout from "./layout";
import UserPage from "./pages/user";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { App } from "antd";

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
    element: (
      <App>
        <LoginPage />
      </App>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
