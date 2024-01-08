import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import ProfilePageLayout from "./components/ProfilePageLayout";
import WishlistPage from "./pages/WishlistPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import Authenticate from "./components/Authenticate";
import BrandPage from "./pages/BrandPage";
import SellerLandingPage from "./pages/SellerLandingPage";

const router = createHashRouter([
  {
    element: <ScrollToTop />,
    children: [
      { path: "/signup", element: <AuthPage type="signup" /> },
      { path: "/login", element: <AuthPage type="login" /> },
      {
        element: <AppLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/brands/:brandId", element: <BrandPage /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/product/:productId", element: <ProductDetailPage /> },
          { path: "/cart", element: <CartPage /> },
          { path: "/become-a-seller", element: <SellerLandingPage /> },
          {
            element: <Authenticate />,
            children: [
              { path: "/checkout", element: <CheckoutPage /> },
              {
                element: <ProfilePageLayout />,
                children: [
                  { path: "/account", element: <ProfilePage /> },
                  { path: "/wishlist", element: <WishlistPage /> },
                  { path: "/orders", element: <OrderPage /> },
                  { path: "/orders/:orderId", element: <OrderDetailPage /> },
                ],
              },
            ],
          },
        ],
      },
      { path: "*", element: <h1>404 Page not Found</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
