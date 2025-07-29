// src/RequireRMK.jsx
import { Navigate, Outlet } from "react-router-dom";

const RequireRMK = () => {
  const isLoggedIn = sessionStorage.getItem("rmk_logged_in") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireRMK;
