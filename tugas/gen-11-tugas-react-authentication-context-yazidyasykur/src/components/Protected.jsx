import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthProvider";
import Logout from "./Logout";

export default function Protected() {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    return (
      <>
        <Logout />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
