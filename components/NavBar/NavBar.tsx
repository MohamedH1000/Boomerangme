import React from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav
      className="bg-[#1F1E1F] w-[100%] fixed top-0 h-[64px] 
    flex justify-between"
    >
      <NavLinks />
      <MobileNav />
    </nav>
  );
};

export default NavBar;
