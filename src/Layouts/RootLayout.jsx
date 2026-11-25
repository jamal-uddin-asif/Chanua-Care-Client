import React from "react";
import Header from "../Components/shared/Header";
import { Outlet, useNavigate, useNavigation } from "react-router";

const RootLayout = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log({ navigate, navigation });
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
