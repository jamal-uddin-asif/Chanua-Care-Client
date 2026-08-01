import React, { useState } from "react";
import Container from "./Container";
import { AiFillMedicineBox } from "react-icons/ai";
import { LuScanSearch } from "react-icons/lu";
import NavberLink from "./NavberLink";
import {
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import MainLogo from "./MainLogo";
import { FiPlus } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const linksItems = [
  {
    route: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    route: "/add-medicine",
    name: "Add Medicine",
    icon: <FiPlus/>,
  },
  {
    route: "/about-us",
    name: "About Us",
    icon: <FaInfoCircle />,
  },
  {
    route: "/services",
    name: "Services",
    icon: <FaStethoscope />,
  },
  {
    route: "/how-it-works",
    name: "How It Works",
    icon: <FaCog />,
  },
  {
    route: "/contact",
    name: "Contact Us",
    icon: <FaEnvelope />,
  },
];

const Header = () => {
  const links = linksItems.map((link) => (
    <NavberLink key={link.name} link={link} />
  ));

  const [manuToggled, setManuToggled] = useState(false);

  return (
    <div>
      <div className="bg-background relative">
        <Container>
          <div className="  p-8  flex  md:flex-row justify-between items-center">
            {/* left */}
            <div className="flex items-center gap-2  ">
              <div onClick={() => setManuToggled(!manuToggled)} className="md:hidden">
                {manuToggled ? (
                  <RiMenuFold2Fill size={28} />
                ) : (
                  <RiMenuFoldFill size={28} />
                )}
              </div>
              <MainLogo />
            </div>
            {/* center */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search your medicine"
                className="bg-surface  text-text  font-bold active:bg-surface outline-border py-3 shadow px-3 rounded-xl border min-w-90 pl-16"
              />
              <div className="absolute top-3.5 left-7">
                <LuScanSearch color="blue" size={23} />
              </div>
              <div className="flex justify-center items-center absolute bg-primary text-surface rounded-r-xl top-0 right-0 bottom-0 px-3">
                <IoSearchOutline size={30}/>
              </div>
            </div>
            {/* right */}
            <div>
              <button className="border-2  border-border rounded-xl hover:bg-secondary p-2 font-bold hover:text-surface mr-2 transition-all duration-200">
                Login
              </button>
              <button className="bg-primary hover:bg-transparent hover:text-text border-2 rounded-xl border-border p-2 text-surface font-bold">
                Get Start
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* nav */}
      <nav className="bg-primary  hidden md:block">
        <Container>
          <ul className="flex justify-center gap-8 py-2 text-surface">
            {links}
          </ul>
        </Container>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-background h-screen min-w-70 text-xl  absolute ease-in-out duration-300 ${manuToggled ? "left-0 top-0" : " -left-69 top-0 "}`}
      >
        <div className="flex justify-between py-3 mx text-primary items-center ">
          <div> <AiFillMedicineBox color="" size={40}/></div>
          <div onClick={()=>setManuToggled(!manuToggled)} className="hover:bg-gray-300 p-1 rounded-xl"><RiMenuFoldFill size={28}/></div>
        </div>
        <ul className="px-2 text-text  flex flex-col justify-start ">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;
