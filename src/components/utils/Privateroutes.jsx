import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const auth = useSelector((state) => state.authSlice.profile);

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
