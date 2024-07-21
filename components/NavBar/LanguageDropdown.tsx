import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
  setOpenLang: Dispatch<SetStateAction<boolean>>;
  setOpenNot: Dispatch<SetStateAction<boolean>>;
  openLang: Boolean;
  setOpenProfile: Dispatch<SetStateAction<boolean>>;
}
const LanguageDropdown: React.FC<Props> = ({
  setOpenLang,
  setOpenNot,
  openLang,
  setOpenProfile,
}) => {
  const currentLanguage = [
    { lang: "en", name: "english" },
    { lang: "ar", name: "arabic" },
  ];
  return (
    <div
      className="hover:bg-[#2E2E2E] duration-300 w-full 
h-[100%] flex justify-center items-center"
      onClick={() => {
        setOpenProfile(false);
        setOpenLang((prev: any) => !prev);
        setOpenNot(false);
      }}
    >
      <div
        className="border rounded-full border-color-[white] 
h-[30px] w-[30px] flex justify-center 
items-center text-white cursor-pointer"
      >
        en
      </div>
      <div
        className={`${
          openLang
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[270px]  bg-[#2E2E2E] top-[64px] right-0 text-white duration-300  flex flex-col justify-between items-start`}
      >
        <div className="p-4 pl-10">Language:</div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex p-4 pl-10 cursor-pointer">
          <div
            className="flex justify-center items-center border-white
          border-[1px] rounded-full aspect-square w-[30px] mr-3"
          >
            <p>ar</p>
          </div>
          <p>Arabic</p>
        </div>
        <hr className="border-b-1 border-white w-full" />
        <div className="flex p-4 pl-10 cursor-pointer">
          <div
            className="flex justify-center items-center border-white
          border-[1px] rounded-full aspect-square w-[30px] mr-3"
          >
            <p>en</p>
          </div>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
