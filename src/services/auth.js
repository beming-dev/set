import { createContext, useContext, useEffect, useState } from "react";
import { authedRequest, LOCAL_TOKEN } from "../services/http";

const AuthContext = createContext();

const useAuthData = () => {
  const [authed, setAuthed] = useState(false);
  const [userData, setUserData] = useState();

  return {
    authed,
    userData,
    setUserData,
    setAuthed,
    login: (userData, token) => {
      return new Promise((resolve, reject) => {
        localStorage.setItem(LOCAL_TOKEN, token);
        setAuthed(true);
        setUserData(userData);
        resolve();
      });
    },
    logout: () => {
      return new Promise((resolve, reject) => {
        localStorage.removeItem(LOCAL_TOKEN);
        setAuthed(false);
        setUserData(undefined);
        resolve();
      });
    },
  };
};

export const AuthProvider = ({ children }) => {
  const data = useAuthData();

  useEffect(() => {
    if (localStorage.getItem(LOCAL_TOKEN)) {
      authedRequest
        .get(`/api/profile`)
        .then((res) => {
          if (res && res.data) {
            data.setUserData(res.data);
            data.setAuthed(true);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            if (
              !window.location.href.includes("/login") &&
              !window.location.href.includes("/register")
            ) {
              alert(err.response.data.error);
              window.location.href = "/posts/login";
            }
          }
        });
    }
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
