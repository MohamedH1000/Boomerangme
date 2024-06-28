"use client";
import Image from "next/image";
import React, { useState } from "react";

const MobileNav = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      className="flex justify-center items-center md:hidden max-md:static mr-4"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {open ? (
        <Image
          src={"/assets/close.png"}
          alt="close"
          height={20}
          width={20}
          className="invert"
        />
      ) : (
        <Image
          src={"/icons/hamburger.svg"}
          alt="hamburger"
          height={36}
          width={36}
          className="invert-0"
        />
      )}
    </div>
  );
};

export default MobileNav;
