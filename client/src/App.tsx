import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "./pages";
import "./index.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  { path: "/signup", element: <AuthPage type="signup" /> },
  { path: "/login", element: <AuthPage type="login" /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/product/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
