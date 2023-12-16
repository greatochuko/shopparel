import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export default function Authenticate() {
  const { pathname } = useLocation();
  const { user } = useUserContext();

  if (!user) return <Navigate to={`/login?redirect=${pathname}`} replace />;
  return <Outlet />;
}
