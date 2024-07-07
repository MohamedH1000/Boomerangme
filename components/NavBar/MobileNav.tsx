"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileNav = ({ currentUser }: any) => {
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
          <div className="w-[320px] absolute right-0  top-[64px] flex flex-col justify-center items-start max-sm:w-full h-[700px]">
            <div className="w-[320px] h-[114px] bg-[#1F1E1F] border-t-[0.5px] border-white p-4 max-sm:w-full">
              <div className="flex justify-start items-center gap-10">
                <div className="text-white text-[12px]">
                  <h1>
                    Hi <br />
                    <span className="font-bold">{currentUser?.firstName}</span>
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
                  <svg
                    height="20"
                    viewBox="0 0 14 20"
                    width="14"
                    className="invert"
                  >
                    <path d="m10.5 8.35624c1.9687.20727 3.5 1.79686 3.5 3.72706v7.5c0 .2301-.1959.4167-.4375.4167s-.4375-.1866-.4375-.4167v-7.5c0-1.4693-1.1409-2.6849-2.625-2.88708v4.97048c0 .9204-.7835 1.6666-1.75 1.6666-.78132 0-1.47161-.1997-2.05766-.5995-.22287-.152-.49015-.2338-.76465-.2338-.22503 0-.40578.1241-.47017.308-.09707.2774-.03882.5477.14154.7409l3.04043 3.2576c.16053.172.14426.4354-.03633.5883-.18059.1528-.45712.1373-.61765-.0347l-2.21058-2.3684c-.02825.0054-.05749.0083-.08743.0083h-3.5c-1.208123 0-2.1875-.9327-2.1875-2.0833v-13.33337c0-1.150591.979377-2.0833295 2.1875-2.0833295l6.125-.0000005c1.20813.00000034 2.1875.932739 2.1875 2.08333zm-5.55492 8.24636c-.3883-.4161-.5137-.998-.32888-1.526.19471-.5563.70983-.9099 1.2904-.9099.47837 0 .92382.1363 1.29528.3897.43333.2956.94496.4436 1.54812.4436.48325 0 .875-.3731.875-.8333v-12.08337c0-.69035-.58762-1.249998-1.3125-1.249998h-6.125c-.72487 0-1.3125.559648-1.3125 1.249998v13.33337c0 .6903.58763 1.25 1.3125 1.25h2.81742zm-1.00758-14.10257c-.24162 0-.4375-.18655-.4375-.41667s.19588-.41666.4375-.41666h2.625c.24162 0 .4375.18654.4375.41666s-.19588.41667-.4375.41667z"></path>
                  </svg>
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
