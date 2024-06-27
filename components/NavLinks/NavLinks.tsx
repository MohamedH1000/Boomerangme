"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProfileDialog from "./ProfileDialog";

const NavLinks = () => {
  const [openNot, setOpenNot] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const myuser = { id: 1, username: "mohamed" };
  const currentLanguage = { lang: "en" };
  return (
    <>
      <div className="flex justify-center gap-10">
        <Link href={"/"}>
          <Image
            src={"/assets/logotype-light.svg"}
            alt="Boomerang"
            width={150}
            height={50}
            className="ml-4 mt-5"
          />
        </Link>
        <div className="flex justify-center max-md:hidden">
          <div
            className="p-2 flex justify-between text-white
    hover:bg-[#2E2E2E] duration-500
    cursor-pointer w-[180px] text-[14px] items-center"
          >
            <p>
              Hi, <br /> <span className="font-bold">{myuser?.username}</span>
            </p>
            <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
              <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
                <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
              </svg>
            </div>
          </div>
          <div
            className="p-2 flex justify-between text-white
    hover:bg-[#2E2E2E] duration-500 cursor-pointer
    w-[180px] text-[14px] items-center"
          >
            <div>implementation</div>
            <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
              <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
                <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mr-5 flex justify-center 
w-[250px] items-center h-[100%] max-md:hidden"
      >
        {/* Notification */}
        <div
          className={`${
            openNot ? "bg-[#2E2E2E]" : "hover:bg-[#2E2E2E]"
          } duration-300 
  w-full h-[100%] flex justify-center items-center cursor-pointer relative`}
          onClick={() => {
            setOpenNot((prev: any) => !prev);
            setOpenLang(false);
            setOpenProfile(false);
          }}
        >
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#FFFFFF]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.9995 24C11.715 24 13.215 22.9109 13.7718 21.3333H15.8961C16.3625 21.3333 16.8237 21.2355 17.2499 21.046C18.9322 20.2984 19.6899 18.3285 18.9422 16.6462L17.9995 14.5252V10.6667C17.9995 7.18342 15.7733 4.22011 12.6662 3.12188V2.66667C12.6662 1.19391 11.4723 0 9.9995 0C8.52674 0 7.33283 1.19391 7.33283 2.66667V3.12188C4.22565 4.22011 1.9995 7.18342 1.9995 10.6667V14.5252L1.05683 16.6462C0.867405 17.0724 0.769531 17.5336 0.769531 18C0.769531 19.841 2.26192 21.3333 4.10286 21.3333H6.22714C6.78232 22.9069 8.28029 24 9.9995 24ZM7.69141 21.3333H12.3125C11.8467 22.1394 10.9763 22.6667 10.002 22.6667C9.02584 22.6667 8.15635 22.1378 7.69141 21.3333ZM11.332 2.77728V2.66667C11.332 1.93029 10.7351 1.33333 9.9987 1.33333C9.26232 1.33333 8.66536 1.93029 8.66536 2.66667V2.77728C9.09898 2.70453 9.54442 2.66667 9.9987 2.66667C10.453 2.66667 10.8984 2.70453 11.332 2.77728ZM3.33283 10.6667C3.33283 6.98477 6.3176 4 9.9995 4C13.6814 4 16.6662 6.98477 16.6662 10.6667V14.6667L16.7236 14.9374L17.7238 17.1877C18.1724 18.1971 17.7178 19.379 16.7084 19.8276C16.4527 19.9413 16.176 20 15.8961 20H4.10286C2.9983 20 2.10286 19.1046 2.10286 18C2.10286 17.7202 2.16159 17.4434 2.27524 17.1877L3.27537 14.9374L3.33283 14.6667V10.6667Z"
            ></path>
          </svg>
          <div
            className={`${
              openNot
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } absolute w-[270px] h-[100px] bg-[#2E2E2E] top-[64px] left-0 text-white duration-300 p-4 flex flex-col justify-between items-start`}
          >
            <div className="flex justify-center gap-3 pl-4 items-center border-b-white">
              <Image
                src={"/assets/account.svg"}
                alt="account"
                width={24}
                height={24}
                className="invert"
              />
              <div className="text-[14px]">My Notification</div>
            </div>
          </div>
        </div>
        {/* Information */}
        <Link
          href={"https://help.digitalwallet.cards"}
          target="_blank"
          className="hover:bg-[#2E2E2E] duration-300
    w-full h-[100%] flex
    justify-center items-center cursor-pointer"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#FFFFFF]"
          >
            <path d="m13.2 16.8h1.8c.3314 0 .6.2686.6.6s-.2686.6-.6.6h-4.8c-.33137 0-.6-.2686-.6-.6s.26863-.6.6-.6h1.8v-6h-1.8c-.33137 0-.6-.2686-.6-.6 0-.33137.26863-.6.6-.6h2.4c.3314 0 .6.26863.6.6zm-1.2 7.2c-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12zm0-1.2c5.9647 0 10.8-4.8353 10.8-10.8 0-5.96468-4.8353-10.8-10.8-10.8-5.96468 0-10.8 4.83532-10.8 10.8 0 5.9647 4.83532 10.8 10.8 10.8zm-.6-16.8h1.2c.3314 0 .6.26863.6.6v1.2c0 .33137-.2686.6-.6.6h-1.2c-.3314 0-.6-.26863-.6-.6v-1.2c0-.33137.2686-.6.6-.6z"></path>
          </svg>
        </Link>
        {/* Language */}
        <div
          className="hover:bg-[#2E2E2E] duration-300 w-full 
  h-[100%] flex justify-center items-center"
        >
          <div
            className="border rounded-full border-color-[white] 
    h-[30px] w-[30px] flex justify-center 
    items-center text-white cursor-pointer"
          >
            {currentLanguage.lang}
          </div>
        </div>
        {/* profile  */}
        <ProfileDialog
          setOpenLang={setOpenLang}
          setOpenNot={setOpenNot}
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
        />
      </div>
    </>
  );
};

export default NavLinks;
