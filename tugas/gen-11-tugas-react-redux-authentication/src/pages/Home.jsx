import { useContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../components/Login";

export default function Home() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();

  if (isLogin) {
    return <Navigate to="/menu" />;
  }

  return (
    <div className="container">
      <h1>Welcome to</h1>
      <h3>Yazid's Market</h3>

      <p>
        Please{" "}
        <button onClick={() => setToggleLogin(!toggleLogin)}>login</button> to
        continue
      </p>

      {toggleLogin && <Login />}
    </div>
  );
}
