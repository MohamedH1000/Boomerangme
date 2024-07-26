import React from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const NavBar = ({ currentUser }: any) => {
  return (
    <nav
      className="bg-[#1F1E1F] w-[100%] fixed top-0 h-[64px] 
    flex justify-between z-30"
    >
      <NavLinks currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
    </nav>
  );
};

export default NavBar;
