import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Locations | Boomerangme",
  description: "the location of your device",
};
const page = () => {
  return (
    <div className="pl-20 pt-[64px] flex justify-center items-start">
      <div className="w-3/6 border-[#D5D5DD] border-r-[1px] max-md:border-none">
        <div className="px-5">
          <div className=" mt-10">
            <h1 className="text-[30px] font-medium">Locations</h1>
          </div>
          <p className=" w-4/5 mt-5">
            On your plan{" "}
            <span className="font-medium">available 1 locations</span>. In 330
            feet radius from location users can see your geo-push message on the
            lock screen.
          </p>
          <hr className="border-[1px] border-[#D5D5DD] mt-10" />
          <Button className="bg-[black] text-white rounded-md w-full mt-10 ">
            Add location
          </Button>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-3/6 flex justify-center items-start">
        lets see
      </div>
    </div>
  );
};

export default page;
