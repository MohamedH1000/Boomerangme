import PersonalSettings from "@/components/Settings/PersonalSettings";
import React from "react";

const page = () => {
  return (
    <div className="pl-20 pt-10 w-full bg-[#F7F7F8] pr-5 max-sm:pl-5 mb-20">
      <h1 className="text-[20px] font-medium">Personal Settings</h1>
      <div
        className="mt-10 flex justify-center items-start 
      gap-4 mb-10 max-sm:flex-col"
      >
        <div
          className="w-[30%] h-[500px] flex flex-col 
        items-center justify-center gap-5 bg-[#FFFFFF] rounded-md
        border-[#D5D5DD] border-[1px] max-sm:w-[100%] p-4 "
        >
          <div className="flex justify-center items-center w-[80%] cursor-pointer">
            <div
              className="w-full rounded-full flex justify-center items-center
              border-[#D5D5DD] border-[1px] aspect-square 
              bg-[#99999e] text-[#D5D5DD] text-[30px]"
            >
              +
            </div>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center">
            <h1 className="text-[30px]">Mohamed Hesham</h1>
            <p className="text-[13px]">Mohammedhesham115@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col w-[66%] gap-5 max-sm:w-[100%]">
          <PersonalSettings />
          <div
            className="flex flex-col h-[500px]
          items-center justify-center gap-5 bg-[#FFFFFF] rounded-md
          border-[#D5D5DD] border-[1px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default page;
