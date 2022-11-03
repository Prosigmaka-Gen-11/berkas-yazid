import { Navigate, Outlet } from "react-router-dom";
import Logout from "./Logout";

import { useDispatch, useSelector } from "react-redux";

export default function Protected() {
  const auth = useSelector((state) => state.auth);

  if (auth.isLogin) {
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
