import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AddTask from "./components/AddTask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditTask from "./components/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add-task/",
    element: <AddTask />,
  },
  {
    path: "edit-task/:id",
    element: <EditTask />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
