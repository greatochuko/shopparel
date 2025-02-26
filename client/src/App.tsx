import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import ProductListingPage from "./pages/ProductListingPage";
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
import SellersPage from "./pages/SellersPage";
import SellerLandingPage from "./pages/SellerLandingPage";
import Dashboard from "./pages/Dashboard";
import AdminPageLayout from "./components/AdminPageLayout";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminReviewsPage from "./pages/AdminReviewsPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      element: <ScrollToTop />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <Authenticate />,
          children: [
            {
              element: <AdminPageLayout />,
              children: [
                { path: "/admin", element: <Dashboard /> },
                { path: "/admin/products", element: <AdminProductsPage /> },
                { path: "/admin/orders", element: <AdminOrdersPage /> },
                { path: "/admin/reviews", element: <AdminReviewsPage /> },
                { path: "/admin/settings", element: <AdminSettingsPage /> },
                {
                  path: "/admin/reviews/:productId",
                  element: <AdminReviewsPage />,
                },
              ],
            },
          ],
        },
        { path: "/signup", element: <AuthPage type="signup" /> },
        { path: "/login", element: <AuthPage type="login" /> },
        {
          element: <AppLayout />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "/store/:storeSlug", element: <SellersPage /> },
            { path: "/products", element: <ProductListingPage /> },
            { path: "/products/:productId", element: <ProductDetailPage /> },
            { path: "/cart", element: <CartPage /> },
            {
              element: <Authenticate />,
              children: [
                { path: "/become-a-seller", element: <SellerLandingPage /> },
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
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    future: {
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
