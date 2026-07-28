import React from "react";
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

const linksItems = [
  {
    route: "/",
    name: "Home",
    icon: <FaHome />,
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

  const links = linksItems.map((link) => <NavberLink key={link.name} link={link} />);

  return (
    <>
      <div className="bg-background">
        <Container>
          <div className="  p-8  flex  md:flex-row justify-between items-center">
            {/* left */}
            <div>
              <h1 className="uppercase text-primary  text-2xl flex items-center font-bold ">
                <AiFillMedicineBox size={40} color="" />
                <span className="">Chanua</span>
                <span className="text-secondary">Care</span>
              </h1>
            </div>
            {/* center */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search your medicine"
                className="bg-[#f1f1f1f1] text-text active:bg-surface outline-border py-2 px-3 rounded-full min-w-90 pl-22"
              />
              <div className="absolute top-2.5 left-7">
                <LuScanSearch color="green" size={20} />
              </div>
            </div>
            {/* right */}
            <div>
              <button className="border-2 border-border rounded-xl hover:bg-secondary p-2 font-bold hover:text-surface mr-2">Login</button>
              <button className="bg-secondary hover:bg-transparent hover:text-text border-2 rounded-xl border-border p-2 text-surface font-bold">Get Start</button>
            </div>
          </div>
        </Container>
      </div>
      {/* nav */}
      <nav className="bg-primary hidden md:block">
        <Container>
          <ul className="flex justify-center gap-8 py-2 text-surface">
            {links}
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Header;
