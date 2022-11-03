import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/AuthSlice";

export default function Logout() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logout());
  }

  return (
    <div className="navbar">
      <p className="logo">[Bukan] Indomaret</p>
      <div className="user">
        {auth.userData.username}
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
    </div>
  );
}
