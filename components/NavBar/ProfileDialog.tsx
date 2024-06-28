import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setOpenLang: Dispatch<SetStateAction<boolean>>;
  setOpenNot: Dispatch<SetStateAction<boolean>>;
  openProfile: Boolean;
  setOpenProfile: Dispatch<SetStateAction<boolean>>;
}
const ProfileDialog = ({
  setOpenLang,
  setOpenNot,
  openProfile,
  setOpenProfile,
}: Props) => {
  return (
    <div
      className={`${
        openProfile ? "bg-[#2E2E2E]" : "hover:bg-[#2E2E2E]"
      } duration-300 
  w-full h-[100%] flex justify-center items-center cursor-pointer relative`}
      onClick={() => {
        setOpenProfile((prev: any) => !prev);
        setOpenLang(false);
        setOpenNot(false);
      }}
    >
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#FFFFFF]"
      >
        <path d="m19.842 17.4144-4.1484-1.8852c1.404-1.098 2.3064-2.808 2.3064-4.7292 0-3.3132-2.6856-6-6-6-3.3132 0-6 2.6868-6 6 0 1.9212.9024 3.6312 2.3076 4.7292l-4.1484 1.8852c-.3948.18-.7416.4404-1.02.7608-1.2228-1.7508-1.9392-3.8796-1.9392-6.1752 0-5.964 4.836-10.8 10.8-10.8 5.9652 0 10.8 4.836 10.8 10.8 0 2.2956-.7164 4.4244-1.938 6.1752-.2784-.3204-.6252-.5808-1.02-.7608zm-12.642-6.6144c0-2.6508 2.1492-4.8 4.8-4.8s4.8 2.1492 4.8 4.8-2.1492 4.8-4.8 4.8-4.8-2.1492-4.8-4.8zm4.8 12c-3.2244 0-6.1176-1.4124-8.0976-3.6528.1848-.2772.444-.5004.7536-.6396l4.8984-2.2272c.7464.3336 1.5744.5196 2.4456.5196s1.6992-.186 2.4468-.5196l4.8984 2.2272c.3084.1392.5676.3624.7524.6396-1.9788 2.2404-4.8732 3.6528-8.0976 3.6528zm0-22.8c-6.6276 0-12 5.3724-12 12s5.3724 12 12 12 12-5.3724 12-12-5.3724-12-12-12z"></path>
      </svg>
      <div
        className={`${
          openProfile
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[270px]  bg-[#2E2E2E] top-[64px] -right-5 text-white duration-300  flex flex-col justify-between items-start`}
      >
        <div className="flex justify-center gap-3 pl-4 items-center m-4">
          <Image
            src={"/assets/account.svg"}
            alt="account"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">My Profile</div>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex justify-center gap-3 pl-4 items-start m-4">
          <Image
            src={"/assets/createcard.svg"}
            alt="create card"
            width={24}
            height={24}
            className="invert"
          />
          <div className="flex flex-col gap-3">
            <div className="text-[14px]">Create Card</div>
            <div className="text-[14px]">Bar</div>
            <div className="text-[14px]">ATV Rental</div>
          </div>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex justify-center gap-3 pl-4 items-center m-4">
          <Image
            src={"/assets/statistics.svg"}
            alt="statistics"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">Statistics</div>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex justify-center gap-3 pl-4 items-center m-4">
          <Image
            src={"/assets/settings.svg"}
            alt="settings"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">Settings</div>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex justify-center gap-3 pl-4 items-center m-4">
          <Image
            src={"/assets/scanner.svg"}
            alt="scanner"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">Scanner App</div>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex justify-center gap-3 pl-4 items-center m-4">
          <Image
            src={"/assets/Logout.svg"}
            alt="logout"
            width={24}
            height={24}
            className="invert"
          />
          <div className="text-[14px]">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDialog;
