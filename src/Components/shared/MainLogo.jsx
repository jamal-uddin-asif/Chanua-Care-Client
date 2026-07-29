import React from "react";
import { AiFillMedicineBox } from "react-icons/ai";

const MainLogo = () => {
  return (
    <h1 className="uppercase text-primary  md:text-2xl lg:text-3xl flex items-center font-bold ">
      <AiFillMedicineBox size={40} color="" />
      <span className="">Chanua</span>
      <span className="text-secondary">Care</span>
    </h1>
  );
};

export default MainLogo;
