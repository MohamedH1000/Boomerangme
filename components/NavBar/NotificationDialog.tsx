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
          <div className="text-[14px]">Mailing Progress</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDialog;
