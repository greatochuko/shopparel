import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "./pages";
import "./index.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  { path: "/signup", element: <AuthPage type="signup" /> },
  { path: "/login", element: <AuthPage type="login" /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
