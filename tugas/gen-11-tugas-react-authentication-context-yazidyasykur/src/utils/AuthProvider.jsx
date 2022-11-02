import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      return parsedData;
    } else {
      return {};
    }
  });

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? savedToken : null;
  });

  function afterLogin(data) {
    setUserData(data);
    setToken(data.token);
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  }

  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData({});
    setToken(null);
  }

  const isLogin = token != null;

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        token,
        setToken,
        isLogin,
        afterLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
