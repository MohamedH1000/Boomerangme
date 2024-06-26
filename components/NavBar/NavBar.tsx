import React, { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import NavLinks from "../NavLinks/NavLinks";

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
