import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN ", isLoggedIn);

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION - to get the currently loggedIN user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };


  useEffect(() => {
    userAuthentication();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        // authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
