import { useLocation, Navigate } from "react-router-dom";

export default function MainOutlet() {
  //   const { token } = useAuth(),
  // const location = useLocation();

  return <Navigate to="home" />;
  //   return token ? (
  //     <Navigate to="home" />
  //   ) : (
  //     <Navigate to="login" state={{ from: location }} replace />
  //   );
}
