import React from "react";
import Container from "./Container";
import { AiFillMedicineBox } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <div className=" border p-8 flex justify-between items-center">
            {/* left */}
          <div>
            <h1 className="uppercase text-2xl flex items-center font-bold border">
              <AiFillMedicineBox size={40} color="maroon" />
              <span className="text-green-500">Chanua</span>
              <span className="text-red-600">Care</span>
            </h1>
          </div>
          {/* center */}
          <div>
            <input 
            type="text"
             placeholder="Search your medicin"
             className="bg-[#f1f1f1f1] py-2 px-3 rounded-full min-w-90 pl-22"
              />
          </div>
          {/* end */}
          <div>
            <button className="bg-amber-500 p-2 ">Login</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
