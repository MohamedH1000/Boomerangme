"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const CreateCardNav = () => {
  const pathname = usePathname();
  return (
    <div
      className="h-[64px] w-full z-10 bg-[#2E2E2E] mt-[64px] overflow-x-auto px-5
    border-[gray] border-t-[0.5px] border-b-[1px] fixed flex justify-between items-center gap-5"
    >
      <Image
        src={"/assets/createnewcard.svg"}
        height={30}
        width={28}
        alt="create card"
        className="invert"
      />
      <Input
        placeholder="Card name"
        className=" bg-[#1f1e1f] border-1px border-[#83838a] rounded-md text-white 
        w-[250px] h-[40px] transition duration-300 max-sm:w-[184px] text-[16px]"
        required
      />
      <div className="flex justify-center items-center gap-2">
        <Button
          className={`${
            pathname === "/cards/create"
              ? "bg-white text-black"
              : "bg-[#454545] text-white hover:bg-[#1d1c1c] transition duration-300"
          } border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px]
          w-[170px] h-[40px]  text-[16px]`}
        >
          Card type
        </Button>
        <hr className="w-5" />
        <Button
          className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px]
          text-white w-[170px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px]"
          disabled={pathname === "/cards/create" ? true : false}
        >
          Settings
        </Button>
        <hr className="w-5" />
        <Button
          className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px]
          text-white w-[170px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px]"
          disabled={pathname === "/cards/create" ? true : false}
        >
          Design
        </Button>
        <hr className="w-5" />
        <Button
          className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px]
          text-white w-[170px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px]"
          disabled={pathname === "/cards/create" ? true : false}
        >
          Information
        </Button>
      </div>
      <Button
        className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px] max-md:hidden
        text-white w-[60px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px] flex justify-center items-center"
      >
        <Image
          src={"/assets/questionmark.svg"}
          alt="question mark"
          width={28}
          height={30}
          className="invert"
        />
      </Button>
      <Button
        className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px] max-md:hidden
          text-white w-[170px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px]"
      >
        Save and preview
      </Button>
      <Button
        className="bg-[#454545] border-[#ffffff] border-[0.5px] rounded-md max-sm:w-[124px] max-md:hidden
        text-white w-[60px] h-[40px] hover:bg-[#1d1c1c] transition duration-300 text-[16px] flex justify-center items-center"
        disabled={pathname === "/cards/create" ? true : false}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.04762 0H2.95238C1.32183 0 0 1.32183 0 2.95238V5.04762C0 6.67817 1.32183 8 2.95238 8H5.04762C6.67817 8 8 6.67817 8 5.04762V2.95238C8 1.32183 6.67817 0 5.04762 0ZM1.33333 2.95238C1.33333 2.05821 2.05821 1.33333 2.95238 1.33333H5.04762C5.94179 1.33333 6.66667 2.05821 6.66667 2.95238V5.04762C6.66667 5.94179 5.94179 6.66667 5.04762 6.66667H2.95238C2.05821 6.66667 1.33333 5.94179 1.33333 5.04762V2.95238ZM0 18.9524C0 17.3218 1.32183 16 2.95238 16H5.04762C6.67817 16 8 17.3218 8 18.9524V21.0476C8 22.6782 6.67817 24 5.04762 24H2.95238C1.32183 24 0 22.6782 0 21.0476V18.9524ZM1.33333 18.9524C1.33333 18.0582 2.05821 17.3333 2.95238 17.3333H5.04762C5.94179 17.3333 6.66667 18.0582 6.66667 18.9524V21.0476C6.66667 21.9418 5.94179 22.6667 5.04762 22.6667H2.95238C2.05821 22.6667 1.33333 21.9418 1.33333 21.0476V18.9524ZM18.9524 0H21.0476C22.6782 0 24 1.32183 24 2.95238V5.04762C24 6.67817 22.6782 8 21.0476 8H18.9524C17.3218 8 16 6.67817 16 5.04762V2.95238C16 1.32183 17.3218 0 18.9524 0ZM17.3333 2.95238C17.3333 2.05821 18.0582 1.33333 18.9524 1.33333H21.0476C21.9418 1.33333 22.6667 2.05821 22.6667 2.95238V5.04762C22.6667 5.94179 21.9418 6.66667 21.0476 6.66667H18.9524C18.0582 6.66667 17.3333 5.94179 17.3333 5.04762V2.95238ZM13.3333 22.6667V22C13.3333 21.6318 13.6318 21.3333 14 21.3333C14.3682 21.3333 14.6667 21.6318 14.6667 22V22.6667H15.3333C15.7015 22.6667 16 22.9651 16 23.3333C16 23.7015 15.7015 24 15.3333 24H12.6667C12.2985 24 12 23.7015 12 23.3333C12 22.9651 12.2985 22.6667 12.6667 22.6667H13.3333ZM14.6667 10V10.6667H13.3333V8.66667C13.3333 8.29848 13.0349 8 12.6667 8H11.3333C10.9651 8 10.6667 8.29848 10.6667 8.66667C10.6667 9.03486 10.9651 9.33333 11.3333 9.33333H12V10.6667H11.3333C10.9651 10.6667 10.6667 10.9651 10.6667 11.3333C10.6667 11.7015 10.9651 12 11.3333 12H15.3333C15.7015 12 16 11.7015 16 11.3333V10C16 9.63181 15.7015 9.33333 15.3333 9.33333C14.9651 9.33333 14.6667 9.63181 14.6667 10ZM21.3333 12V12.6667C21.3333 13.0349 21.0349 13.3333 20.6667 13.3333C20.2985 13.3333 20 13.0349 20 12.6667V10C20 9.63181 20.2985 9.33333 20.6667 9.33333C21.0349 9.33333 21.3333 9.63181 21.3333 10V10.6667H22.6667V10C22.6667 9.63181 22.9651 9.33333 23.3333 9.33333C23.7015 9.33333 24 9.63181 24 10V11.3333C24 11.7015 23.7015 12 23.3333 12H21.3333ZM11.3333 14.6667H13.3333V16H10C9.63181 16 9.33333 16.2985 9.33333 16.6667C9.33333 17.0349 9.63181 17.3333 10 17.3333H14C14.3682 17.3333 14.6667 17.0349 14.6667 16.6667V14C14.6667 13.6318 14.3682 13.3333 14 13.3333H11.3333C10.9651 13.3333 10.6667 13.6318 10.6667 14C10.6667 14.3682 10.9651 14.6667 11.3333 14.6667ZM3.33333 2.66667H4.66667C5.03486 2.66667 5.33333 2.96514 5.33333 3.33333V4.66667C5.33333 5.03486 5.03486 5.33333 4.66667 5.33333H3.33333C2.96514 5.33333 2.66667 5.03486 2.66667 4.66667V3.33333C2.66667 2.96514 2.96514 2.66667 3.33333 2.66667ZM5.33333 19.3333C5.33333 18.9651 5.03486 18.6667 4.66667 18.6667H3.33333C2.96514 18.6667 2.66667 18.9651 2.66667 19.3333V20.6667C2.66667 21.0349 2.96514 21.3333 3.33333 21.3333H4.66667C5.03486 21.3333 5.33333 21.0349 5.33333 20.6667V19.3333ZM19.3333 2.66667H20.6667C21.0349 2.66667 21.3333 2.96514 21.3333 3.33333V4.66667C21.3333 5.03486 21.0349 5.33333 20.6667 5.33333H19.3333C18.9651 5.33333 18.6667 5.03486 18.6667 4.66667V3.33333C18.6667 2.96514 18.9651 2.66667 19.3333 2.66667ZM13.3333 1.33333V2.66667H12.6667C12.2985 2.66667 12 2.96514 12 3.33333C12 3.70152 12.2985 4 12.6667 4H14C14.3682 4 14.6667 3.70152 14.6667 3.33333V0.666667C14.6667 0.298477 14.3682 0 14 0H10C9.63181 0 9.33333 0.298477 9.33333 0.666667V3.33333C9.33333 3.70152 9.63181 4 10 4C10.3682 4 10.6667 3.70152 10.6667 3.33333V1.33333H13.3333ZM10 6.66667C9.63181 6.66667 9.33333 6.36819 9.33333 6C9.33333 5.63181 9.63181 5.33333 10 5.33333H14C14.3682 5.33333 14.6667 5.63181 14.6667 6C14.6667 6.36819 14.3682 6.66667 14 6.66667H10ZM10.6667 23.3333V20H14C14.3682 20 14.6667 19.7015 14.6667 19.3333C14.6667 18.9651 14.3682 18.6667 14 18.6667H10C9.63181 18.6667 9.33333 18.9651 9.33333 19.3333V23.3333C9.33333 23.7015 9.63181 24 10 24C10.3682 24 10.6667 23.7015 10.6667 23.3333ZM8 12H8.66667C9.03486 12 9.33333 12.2985 9.33333 12.6667V14C9.33333 14.3682 9.03486 14.6667 8.66667 14.6667C8.29848 14.6667 8 14.3682 8 14V13.3333H7.33333C6.96514 13.3333 6.66667 13.0349 6.66667 12.6667V10C6.66667 9.63181 6.96514 9.33333 7.33333 9.33333H8.66667C9.03486 9.33333 9.33333 9.63181 9.33333 10C9.33333 10.3682 9.03486 10.6667 8.66667 10.6667H8V12ZM3.33333 10.6667H4V14C4 14.3682 4.29848 14.6667 4.66667 14.6667C5.03486 14.6667 5.33333 14.3682 5.33333 14V10C5.33333 9.63181 5.03486 9.33333 4.66667 9.33333H3.33333C2.96514 9.33333 2.66667 9.63181 2.66667 10C2.66667 10.3682 2.96514 10.6667 3.33333 10.6667ZM17.3333 10C17.3333 9.63181 17.6318 9.33333 18 9.33333C18.3682 9.33333 18.6667 9.63181 18.6667 10V12.6667C18.6667 13.0349 18.3682 13.3333 18 13.3333C17.6318 13.3333 17.3333 13.0349 17.3333 12.6667V10ZM22.6667 14V14.6667H19.3333C18.9651 14.6667 18.6667 14.9651 18.6667 15.3333C18.6667 15.7015 18.9651 16 19.3333 16H23.3333C23.7015 16 24 15.7015 24 15.3333V14C24 13.6318 23.7015 13.3333 23.3333 13.3333C22.9651 13.3333 22.6667 13.6318 22.6667 14ZM17.3333 17.3333H20.6667C21.0349 17.3333 21.3333 17.6318 21.3333 18C21.3333 18.3682 21.0349 18.6667 20.6667 18.6667H16.6667C16.2985 18.6667 16 18.3682 16 18V15.3333C16 14.9651 16.2985 14.6667 16.6667 14.6667C17.0349 14.6667 17.3333 14.9651 17.3333 15.3333V17.3333ZM22.6667 18V22.6667H18C17.6318 22.6667 17.3333 22.9651 17.3333 23.3333C17.3333 23.7015 17.6318 24 18 24H23.3333C23.7015 24 24 23.7015 24 23.3333V18C24 17.6318 23.7015 17.3333 23.3333 17.3333C22.9651 17.3333 22.6667 17.6318 22.6667 18ZM16.6667 21.3333C16.2985 21.3333 16 21.0349 16 20.6667C16 20.2985 16.2985 20 16.6667 20H20.6667C21.0349 20 21.3333 20.2985 21.3333 20.6667C21.3333 21.0349 21.0349 21.3333 20.6667 21.3333H16.6667ZM2 13.3333H1.33333V10C1.33333 9.63181 1.03486 9.33333 0.666667 9.33333C0.298477 9.33333 0 9.63181 0 10V14C0 14.3682 0.298477 14.6667 0.666667 14.6667H2C2.36819 14.6667 2.66667 14.3682 2.66667 14C2.66667 13.6318 2.36819 13.3333 2 13.3333Z"
            fill="currentColor"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default CreateCardNav;
