import { useLocation, Navigate } from "react-router-dom";

import MainOutlet from "../Templates/Outlet/MainOutlet";

export default function AuthGuard({ isReroute = true }) {
  //   const { token } = useAuth(),
  // const location = useLocation();

  if (isReroute) {
  }

  return <>{isReroute ? <Navigate to="home" /> : <MainOutlet />}</>;
  //   return token ? (
  //     <Navigate to="home" />
  //   ) : (
  //     <Navigate to="login" state={{ from: location }} replace />
  //   );
}
