import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages";
import "./index.css";

const router = createBrowserRouter([
  { path: "/signup", element: <AuthPage type="signup" /> },
  { path: "/login", element: <AuthPage type="login" /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
