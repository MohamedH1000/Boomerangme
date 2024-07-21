"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsNav = () => {
  const pathname = usePathname();
  return (
    <div
      className="pr-10 max-sm:pl-5 max-sm:pr-5 
    pl-20 mt-[64px] h-[64px] fixed z-20 w-full
    bg-[#2E2E2E] overflow-x-auto flex items-center"
    >
      <div className="cursor-pointer">
        <Image
          src={"/assets/settings.svg"}
          alt="settings"
          width={20}
          height={20}
          className="invert"
        />
      </div>
      <div className="flex justify-center items-center gap-5 ml-10">
        <Link href={"/settings"}>
          <Button
            className={`${
              pathname === "/settings"
                ? "bg-[#f6f6f6] border-none text-[#1f1e1f]"
                : "border-[1.5px] border-[#83838a] bg-[#454545] text-white"
            }
            flex justify-center items-center  
          px-6  text-[16px] hover:text-white
           rounded-md hover:bg-[#1F1E1F]
          duration-300`}
          >
            Plan
          </Button>
        </Link>
        <Link href={"/settings/personal"}>
          <Button
            className={`${
              pathname === "/settings/personal"
                ? "bg-[#f6f6f6] border-none text-[#1f1e1f]"
                : "border-[1.5px] border-[#83838a] bg-[#454545] text-white"
            }
            flex justify-center items-center  
          px-6  text-[16px] hover:text-white
           rounded-md hover:bg-[#1F1E1F]
          duration-300`}
          >
            Personal settings
          </Button>
        </Link>
        <Link href={"/settings/integrations"}>
          <Button
            className={`${
              pathname === "/settings/integrations"
                ? "bg-[#f6f6f6] border-none text-[#1f1e1f]"
                : "border-[1.5px] border-[#83838a] bg-[#454545] text-white"
            }
            flex justify-center items-center  
          px-6  text-[16px] hover:text-white
           rounded-md hover:bg-[#1F1E1F]
          duration-300`}
          >
            Integration
          </Button>
        </Link>
        <Link href={"/settings/agency-description"}>
          <Button
            className={`${
              pathname === "/settings/agency-description"
                ? "bg-[#f6f6f6] border-none text-[#1f1e1f]"
                : "border-[1.5px] border-[#83838a] bg-[#454545] text-white"
            }
            flex justify-center items-center  
          px-6  text-[16px] hover:text-white
           rounded-md hover:bg-[#1F1E1F]
          duration-300`}
          >
            About the agency
          </Button>
        </Link>
        <Link href={"/settings/rfm-segments"}>
          <Button
            className={`${
              pathname === "/settings/rfm-segments"
                ? "bg-[#f6f6f6] border-none text-[#1f1e1f]"
                : "border-[1.5px] border-[#83838a] bg-[#454545] text-white "
            }
            flex justify-center items-center  
          px-6  text-[16px] hover:text-white
           rounded-md hover:bg-[#1F1E1F]
          duration-300`}
          >
            RFM
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsNav;
