import { AuthContext } from "@/Context/AuthContext";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const {user , loading} = useContext(AuthContext)

  if(loading) return <div className={'flex justify-center items-center h-screen  py-4 '}><p className="animate-spin  text-4xl">🎆</p></div>

  if (!user) return <Navigate state={location.pathname} to={"/login"} />;

  return <>{children}</>;
};

export default PrivateRoute;
