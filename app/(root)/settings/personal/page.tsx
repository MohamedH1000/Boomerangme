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
        border-[#D5D5DD] border-[1px] max-sm:w-[100%]"
        ></div>
        <div className="flex flex-col w-[66%] gap-5 max-sm:w-[100%]">
          <div
            className=" flex flex-col h-[500px]
          items-center justify-center gap-5 bg-[#FFFFFF] rounded-md
          border-[#D5D5DD] border-[1px]"
          ></div>
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
