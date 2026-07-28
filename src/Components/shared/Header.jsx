import React from "react";
import Container from "./Container";
import { AiFillMedicineBox } from "react-icons/ai";
import { LuScanSearch } from "react-icons/lu";
import { Link } from "react-router";

const Header = () => {

  const links = (
    <>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about-us'}>About us</Link></li>
      <li>Contact</li>
    </>
  );

  return (
    <>
      <div className="bg-background">
        <Container>
          <div className="  p-8  flex flex-col md:flex-row justify-between items-center">
            {/* left */}
            <div>
              <h1 className="uppercase text-primary  text-2xl flex items-center font-bold ">
                <AiFillMedicineBox size={40} color="" />
                <span className="">Chanua</span>
                <span className="text-secondary">Care</span>
              </h1>
            </div>
            {/* center */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search your medicine"
                className="bg-[#f1f1f1f1] text-text active:bg-surface outline-border py-2 px-3 rounded-full min-w-90 pl-22"
              />
              <div className="absolute top-2.5 left-7">
                <LuScanSearch size={20} />
              </div>
            </div>
            {/* right */}
            <div>
              <button className="bg-amber-500 p-2 mr-2">Login</button>
              <button className="bg-amber-500 p-2 ">Get start</button>
            </div>
          </div>
        </Container>
      </div>
      {/* nav */}
      <nav className="bg-primary">
        <Container>
          <ul className="flex justify-center gap-8 py-2 text-surface">
            {
              links
            }
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Header;
