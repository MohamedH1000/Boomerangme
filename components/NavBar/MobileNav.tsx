"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileNav = () => {
  const router = useRouter();
  const [open, setIsOpen] = useState(false);
  const logout = () => {
    try {
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex justify-center items-center md:hidden max-md:static mr-4 relative"
      onClick={() => setIsOpen((prev: any) => !prev)}
    >
      {open ? (
        <>
          <Image
            src={"/assets/close.png"}
            alt="close"
            height={20}
            width={20}
            className="invert rela"
          />
          <div className="w-[320px] absolute right-0  top-[64px] flex flex-col justify-center items-start max-sm:w-full h-[545px]">
            <div className="w-[320px] h-[114px] bg-[#1F1E1F] border-t-[0.5px] border-white p-4 max-sm:w-full">
              <div className="flex justify-start items-center gap-10">
                <div className="text-white text-[12px]">
                  <h1>
                    Hi <br />
                    <span className="font-bold">Mohamed</span>
                  </h1>
                </div>
                <div className="text-white text-[12px]">
                  <h1>
                    Plan: <br />
                    <span className="font-bold">Start</span>
                  </h1>
                </div>
              </div>
              <div className="mt-4 text-white font-bold">Implementation</div>
            </div>
            <div className="bg-[#333] flex flex-1 flex-col  w-full overflow-y-auto z-1 ">
              <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-between items-center w-full ">
                <div className="flex justify-center gap-5 items-center">
                  <Image
                    src={"/icons/mycards.svg"}
                    alt="my cards"
                    width={12}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">My Cards:</p>
                </div>
                <Image
                  src={"/icons/downarrow1.svg"}
                  alt="down arrow"
                  width={14}
                  height={16}
                  className="invert"
                />
              </div>
              <Link href={"cards/create"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/icons/addcards.svg"}
                    alt="my cards"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Create card</p>
                </div>
              </Link>
              <Link href={"/clients"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/icons/customers.svg"}
                    alt="my cards"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Customers</p>
                </div>
              </Link>
              <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                <Image
                  src={"/icons/mailings.svg"}
                  alt="my cards"
                  width={16}
                  height={16}
                  className="invert"
                />
                <p className="text-white text-[12px]">Push</p>
              </div>
              <Link href={"/locations"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/icons/locations.svg"}
                    alt="my cards"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Locations</p>
                </div>
              </Link>
              <Link href={"/"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/assets/statistics.svg"}
                    alt="my cards"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Account statistics</p>
                </div>
              </Link>
              <Link href={"/managers"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/icons/manager.svg"}
                    alt="my cards"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Managers</p>
                </div>
              </Link>
              <Link href={"/settings"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/assets/settings.svg"}
                    alt="settings"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Settings</p>
                </div>
              </Link>
              <Link href={"/scanner-app"}>
                <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full">
                  <Image
                    src={"/icons/scanner.svg"}
                    alt="scanner"
                    width={16}
                    height={16}
                    className="invert fill-white"
                  />
                  <p className="text-white text-[12px]">Scanner App</p>
                </div>
              </Link>
              <div className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-between items-center w-full ">
                <div className="flex justify-center gap-5 items-center">
                  <Image
                    src={"/icons/language.svg"}
                    alt="my cards"
                    width={12}
                    height={16}
                    className="invert"
                  />
                  <p className="text-white text-[12px]">Language</p>
                </div>
                <Image
                  src={"/icons/downarrow1.svg"}
                  alt="down arrow"
                  width={14}
                  height={16}
                  className="invert"
                />
              </div>
              <div
                className="p-4 h-[68px] border-b-[0.5px] border-[gray] flex justify-start items-center gap-5 w-full"
                onClick={logout}
              >
                <Image
                  src={"/assets/logout.svg"}
                  alt="Logout"
                  width={16}
                  height={16}
                  className="invert fill-white"
                />
                <p className="text-white text-[12px]">Log out</p>
              </div>
            </div>
          </div>
        </>
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
