import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {
  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  const [isAuthenticated,
    setIsAuthenticated] =
    useState(!!token);

  useEffect(() => {
    setIsAuthenticated(
      !!token
    );
  }, [token]);

  const login = (newToken) => {
    localStorage.setItem(
      "token",
      newToken
    );
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};