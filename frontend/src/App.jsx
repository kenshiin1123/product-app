import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CreatePage from "./pages/CreatePage";
import Layout from "./Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useGlobalStore } from "./store/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/create",
        element: <CreatePage />,
      },
    ],
  },
]);

export default function App() {
  const { darkMode } = useGlobalStore();

  if (darkMode) {
    document.documentElement.style.backgroundColor = "black";
  } else {
    document.documentElement.style.backgroundColor = "#f8fafc";
  }

  return (
    <div className={`${darkMode ? "dark" : null} transition-colors dark:bg-black dark:text-white`}>
      <RouterProvider router={router} />
    </div>
  );
}
