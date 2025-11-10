import { Navigate } from "react-router-dom";

interface Props { children: JSX.Element }

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = localStorage.getItem("brennand_auth") === "true";
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return children;
};

export default ProtectedRoute;
