import React from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { User } from "@prisma/client";

const NavBar = ({ currentUser }: any) => {
  return (
    <nav
      className="bg-[#1F1E1F] w-[100%] fixed top-0 h-[64px] 
    flex justify-between z-[10]"
    >
      <NavLinks currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
    </nav>
  );
};

export default NavBar;
