import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  openNot: Boolean;
  setOpenLang: Dispatch<SetStateAction<boolean>>;
  setOpenProfile: Dispatch<SetStateAction<boolean>>;
  setOpenNot: Dispatch<SetStateAction<boolean>>;
}
const NotificationDialog = ({
  openNot,
  setOpenLang,
  setOpenProfile,
  setOpenNot,
}: Props) => {
  return (
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
      <Image
        src={"/assets/notification.svg"}
        alt="notification"
        width={20}
        height={20}
        className="invert"
      />
      <div
        className={`${
          openNot
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[270px] h-[100px] bg-[#2E2E2E] top-[64px] left-0 text-white duration-300 p-4 flex flex-col justify-between items-start`}
      >
        <div className="flex justify-center gap-3 pl-4 items-center border-b-white">
          <div className="text-[14px]">Mailing Progress</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;
