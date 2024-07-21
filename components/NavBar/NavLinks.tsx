"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProfileDialog from "./ProfileDialog";
import NotificationDialog from "./NotificationDialog";
import LanguageDropdown from "./LanguageDropdown";
import HiDialog from "./HiDialog";
import Implementation from "./Implementation";

const NavLinks = ({ currentUser }: any) => {
  const [openNot, setOpenNot] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openImplement, setOpenImplement] = useState(false);
  const [openHi, setOpenHi] = useState(false);

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
          <HiDialog
            openHi={openHi}
            setOpenHi={setOpenHi}
            setOpenImplement={setOpenImplement}
            currentUser={currentUser}
          />
          <Implementation
            openImplement={openImplement}
            setOpenImplement={setOpenImplement}
            setOpenHi={setOpenHi}
          />
        </div>
      </div>
      <div
        className="mr-5 flex justify-center 
w-[250px] items-center h-[100%] max-md:hidden"
      >
        {/* Notification */}
        <NotificationDialog
          openNot={openNot}
          setOpenNot={setOpenNot}
          setOpenLang={setOpenLang}
          setOpenProfile={setOpenProfile}
        />
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
        <LanguageDropdown
          setOpenLang={setOpenLang}
          setOpenNot={setOpenNot}
          openLang={openLang}
          setOpenProfile={setOpenProfile}
        />
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
