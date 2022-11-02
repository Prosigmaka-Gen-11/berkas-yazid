import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { isLogin, afterLogin } = useContext(AuthContext);
  function loginHandler(event) {
    event.preventDefault();

    axios
      .post("https://dummyjson.com/auth/login", {
        username: input.username,
        password: input.password,
      })
      .then((res) => afterLogin(res.data))
      .catch((err) => console.log(err));
  }

  if (isLogin) {
    navigate("/menu");
  }

  function inputHandler(event, propName) {
    setInput({ ...input, [propName]: event.target.value });
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={(event) => loginHandler(event)}>
        <label>
          Username : <br />
          <input
            type="text"
            value={input.username}
            onChange={(event) => inputHandler(event, "username")}
          />
        </label>

        <br />

        <label>
          Password : <br />
          <input
            type="password"
            value={input.password}
            onChange={(event) => inputHandler(event, "password")}
          />
        </label>

        <br />

        <button>Login</button>
      </form>
      <br />

      <div>
        Doesn't have an account? Use mine :) <br />
        Username : kmeus4 <br />
        Password : aUTdmmmbH <br />
      </div>
    </div>
  );
}
