import { AuthContext } from "@/Context/AuthContext";
import axios from "axios";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export const useAxiosSecure = () => {
  const { user, LogOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptors = instance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error) => {
        console.log(error);
      },
    );

    const responseInterceptors = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
          toast.error("Tui beta chor, bahir hoooooooo........");
          console.log("Tui beta chor, bahir hoooooooo........");
          LogOutUser();
          navigate("/auth/login");
        }
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptors);
      instance.interceptors.response.eject(responseInterceptors);
    };
    
  }, [user, LogOutUser, navigate]);

  return instance;
};
