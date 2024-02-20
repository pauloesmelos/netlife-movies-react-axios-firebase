import React from "react";
import { GlobalUser } from "../../global/user/GlobalUser";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { isLogged } = React.useContext(GlobalUser);
  return isLogged() ? children : <Navigate to={"/"} /> ;
}

export default ProtectedRoute;