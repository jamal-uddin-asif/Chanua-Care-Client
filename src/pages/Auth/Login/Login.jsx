import Container from "@/Components/shared/Container";
import MainLogo from "@/Components/shared/MainLogo";
import React from "react";
import { useLocation } from "react-router";

const Login = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex justify-between h-screen">

        {/* left side  */}
      <div className="bg-amber-100  flex-1"></div>

      {/* right side */}
      <div className=" flex-1">
        <div className="flex justify-end">
          <MainLogo />
        </div>
        <div className="border-4 border-l-4 p-4 border-red-400">

            <form >
                
            </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
