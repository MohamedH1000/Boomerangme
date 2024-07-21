import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div
      className="pl-20 max-md:pl-5 
      mt-[175px] w-full pr-5"
    >
      <h1 className="text-[28px] max-ms:text-[15px]">Integrations</h1>
      <div
        className="flex justify-center items-center gap-3 
      max-lg:flex-col w-full mt-5 mb-20"
      >
        <div
          className="flex flex-col items-start justify-center
        border-[1px] border-[#D5D5DD] rounded-md w-full bg-[#FFFFFF]"
        >
          <div
            className="h-[68px] flex justify-start 
          items-center w-full pl-3 border-[#D5D5DD] border-b-[1px]"
          >
            <div className="w-[50%] font-medium">
              <p>Plan</p>
            </div>
            <div className="w-[50%] font-medium">
              <p>Available</p>
            </div>
          </div>
          <div
            className="h-[166px] flex justify-start 
          items-center w-full  py-10 px-4"
          >
            <div className="w-[50%] font-medium">
              <p className="text-[30px] max-sm:text-[20px]">Start</p>
              <p className="max-sm:text-[14px]">Annual payment</p>
            </div>
            <div className="w-[50%] font-medium">
              <p className="text-[36px] max-sm:text-[20px]">0</p>
              <p className="max-sm:text-[14px]">Integrations</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-center
        border-[1px] border-[#D5D5DD] rounded-md w-full bg-[#FFFFFF]"
        >
          <div
            className="h-[68px] w-full pl-3 
          border-[#D5D5DD] border-b-[1px] flex items-center"
          >
            <p className="text-[16px] font-medium">API</p>
          </div>
          <div className="h-[166px] flex justify-between items-center w-full px-3 max-sm:flex-col max-md:items-start">
            <div className="w-[50%] font-medium max-sm:pl-5 max-sm:py-4">
              <p className="font-bold text-[16px]">-</p>
              <p>API key</p>
            </div>
            <div className="w-[50%] font-medium p-4 max-sm:w-full">
              <Button className="bg-[black] text-white rounded-md w-full">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
