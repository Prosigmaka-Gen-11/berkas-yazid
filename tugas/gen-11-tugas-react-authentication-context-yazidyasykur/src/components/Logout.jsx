import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";

export default function Logout() {
  const { logout, userData } = useContext(AuthContext);

  function logoutHandler() {
    logout();
  }

  return (
    <div className="navbar">
      <p className="logo">[Bukan] Indomaret</p>
      <div className="user">
        {userData.username}
        <button onClick={() => logoutHandler()}>Logout</button>
      </div>
    </div>
  );
}
