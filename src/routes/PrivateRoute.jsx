import React from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const user = false;
  const loading = true;

  if(loading) return <div className={'flex justify-center items-center h-screen  py-4 '}><p className="animate-spin  text-4xl">🎆</p></div>

  if (!user) return <Navigate state={location.pathname} to={"/login"} />;

  return <>{children}</>;
};

export default PrivateRoute;
