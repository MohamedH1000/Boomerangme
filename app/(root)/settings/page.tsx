"use client";
import MobilePlan from "@/components/Settings/MobilePlan";
import SettingPlan from "@/components/Settings/SettingPlan";
import TablePlan from "@/components/Settings/TablePlan";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen flex flex-1 flex-col pl-20 
mt-10 w-full bg-[#F7F7F8] pr-10 max-sm:pl-5 max-sm:pr-5"
    >
      <SettingPlan />
      <div
        className="flex justify-between items-start gap-5  
      mt-5 w-full max-lg:flex-col max-lg:justify-center max-lg:gap-0"
      >
        <div
          className=" h-[214px] bg-[#ffffff]
        rounded-md border-[1px] border-[#D5D5DD] w-[50%] max-lg:w-[100%]"
        >
          <div
            className="flex justify-between items-center
          p-4 w-full h-[68px] border-b-[1px] border-[#D5D5DD] gap-5 max-md:p-[10px]"
          >
            <p className="font-semibold text-[18px] w-[50%] max-md:text-[14px]">
              Plan
            </p>
            <p className="font-semibold text-[18px] w-[50%] max-md:text-[14px]">
              Price
            </p>
          </div>
          <div
            className="flex justify-between items-center
          p-4 w-full h-[68px] max-md:p-[10px]"
          >
            <div className="flex flex-col justify-center items-start w-[50%] mt-5">
              <h1 className=" text-[36px] max-md:text-[20px]">Start (Trial)</h1>
              <p className="text-[12px]">Annual payment</p>
            </div>
            <div className="flex flex-col justify-center items-start w-[50%] mt-5">
              <h1 className=" text-[36px] max-md:text-[20px]">US$139</h1>
              <p className="text-[12px]">Per month</p>
            </div>
          </div>
        </div>
        <div
          className="w-[50%] h-[254px] bg-[#ffffff]
        rounded-md border-[1px] border-[#D5D5DD] max-lg:w-[100%]
        flex flex-col"
        >
          <div
            className="flex justify-between items-center
          p-4 w-full h-[68px] border-b-[1px] border-[#D5D5DD]"
          >
            <p className="font-semibold max-md:text-[14px]">
              Plan payment date
            </p>
          </div>
          <div
            className="flex justify-between items-center
          p-4 w-full h-[68px]"
          >
            <div className="flex  justify-between items-start w-full mt-5 px-5">
              <div className="flex flex-col max-md:w-[50%] max-sm:w-auto">
                <h1 className=" text-[36px] max-md:text-[20px]">09.07.2024</h1>
                <p className="text-[12px]">Next payment date</p>
              </div>
              <p className="text-[36px] max-md:text-[20px] max-md:w-[50%] max-sm:w-auto">
                13:29
              </p>
              <div className="flex flex-col max-md:hidden">
                <p className="text-[36px]">9</p>
                <p className="text-[12px]">Days left</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 p-4">
            <Button
              className="h-[40px] text-white
              bg-[#1F1E1F]  w-[143px] hover:opacity-90
              duration-300 max-sm:w-full"
            >
              Extend
            </Button>
          </div>
        </div>
      </div>
      <div
        className="w-full h-auto rounded-md bg-[#ffffff] border-[1px]
      border-[#D5D5DD] mt-10 flex justify-center items-start max-lg:hidden
      "
      >
        <div
          className="w-[33%] px-10 py-[50px] border-r-[1px] border-[#D5D5DD]
        flex flex-col items-start h-full"
        >
          <Image
            src={"/assets/plan_1.png"}
            alt="plan 1"
            width={100}
            height={20}
          />
          <h1 className="text-[36px] mt-10">Start</h1>
          <p>تع</p>

          <div className="w-full mt-20">
            <p>
              from <span className="font-semibold text-[30px]">$9</span> /month
            </p>
            <Button
              className="w-full h-[40px] bg-[#1F1E1F]
            hover:opacity-90 mt-5
            duration-300 text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div
          className="w-[33%] px-10 py-[50px] border-r-[1px] border-[#D5D5DD]
        flex flex-col items-start h-full"
        >
          <Image
            src={"/assets/plan_2.png"}
            alt="plan 1"
            width={100}
            height={20}
          />
          <h1 className="text-[36px] mt-10">Grow</h1>
          <p>gg</p>

          <div className="w-full mt-20">
            <p>
              from <span className="font-semibold text-[30px]">$99</span> /month
            </p>
            <Button
              className="w-full h-[40px] bg-[#1F1E1F]
            hover:opacity-90 mt-5
            duration-300 text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div
          className="w-[33%] px-10 py-[50px]
        flex flex-col items-start h-full"
        >
          <Image
            src={"/assets/plan_3.png"}
            alt="plan 1"
            width={100}
            height={20}
          />
          <h1 className="text-[36px] mt-10">Business</h1>
          <p>For advanced businesses that intend to become market leaders</p>

          <div className="w-full mt-[55px]">
            <p>
              from <span className="font-semibold text-[30px]">$129</span>{" "}
              /month
            </p>
            <Button
              className="w-full h-[40px] bg-[#1F1E1F]
            hover:opacity-90
            duration-300 text-white mt-5"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <TablePlan />
      <MobilePlan />
    </div>
  );
};

export default page;
