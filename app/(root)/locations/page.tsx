import Locations from "@/components/Locations/Locations";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Locations | Boomerangme",
  description: "the location of your device",
};
const page = () => {
  return (
    <div
      className="pl-20 pt-[64px] flex justify-center 
    items-start max-md:flex-col max-md:items-center max-md:pl-0"
    >
      <div className="w-3/6  max-md:border-none max-md:w-full">
        <Locations />
      </div>
      <div
        className="bg-[#FFFFFF] w-3/6 h-[800px] border-[#D5D5DD] border-l-[1px]
      max-md:border-none max-md:w-full max-md:mt-20 flex justify-start items-center flex-col"
      >
        <div className="w-[80px] h-24px rounded-full flex items-center bg-[#eaeaed] p-1 justify-center mt-10">
          <div className="bg-[#1dcd27] rounded-full h-2 mr-3 w-2 " />
          <p className="text-[12px]">Active</p>
        </div>
        <div
          className="bg-[url('/assets/iphone.png')] h-[550px] w-[650px] bg-no-repeat p-4 flex justify-center items-start
        bg-cover bg-center max-md:w-[400px] max-md:h-[400px] max-sm:w-[250px] max-sm:h-[250px]"
        >
          <div className="w-[200px] h-[72px] rounded-md bg-[#947b7b] mt-[100px] max-md:w-[140px] max-sm:w-[90px] max-sm:h-[60px]">
            <div className="p-2">
              <div className="flex justify-between items-center">
                <h1 className="uppercase text-white text-[15px] max-md:text-[10px] max-sm:text-[8px]">
                  Company name
                </h1>
                <p className="text-white text-[9px] max-sm:text-[6px]">now</p>
              </div>
              <p className="text-[10px] text-white max-md:text-[6px]">
                Push text in a side preview of the service with emojies 👀 🎫 💬
                😍
              </p>
            </div>
          </div>
        </div>
        <p className="font-medium">Geo-push available for iOS devices only</p>
      </div>
    </div>
  );
};

export default page;
