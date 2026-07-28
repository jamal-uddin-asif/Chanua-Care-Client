import React from "react";
import { NavLink } from "react-router";

const NavberLink = ({ link }) => {
  return (
    <div className="relative group">
      <NavLink to={link.route}>
        {({ isActive }) => (
          <>
            <div className="flex justify-center items-center gap-1"><span>{link.icon}</span>{link.name}</div>

            <div
              className={`${isActive ? "bg-surface p-0.5 w-full" : "py-0.5 bg- w-0 bg-surface group-hover:p-0.5 group-hover:w-full ease-in-out duration-400"}  `}
            ></div>
          </>
        )}
      </NavLink>
    </div>
  );
};

export default NavberLink;
