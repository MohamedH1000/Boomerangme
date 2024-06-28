"use client";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
  openHi: Boolean;
  setOpenHi: Dispatch<SetStateAction<boolean>>;
  setOpenImplement: Dispatch<SetStateAction<boolean>>;
}
const HiDialog = ({ openHi, setOpenHi, setOpenImplement }: Props) => {
  const myuser = { id: 1, username: "mohamed" };
  return (
    <div
      className={`${
        openHi ? "bg-[#2E2E2E]" : "hover:bg-[#2E2E2E]"
      } p-2 flex justify-between text-white
        duration-500 cursor-pointer w-[180px] text-[14px] 
        items-center relative`}
      onClick={() => {
        setOpenHi((prev: any) => !prev);
        setOpenImplement(false);
      }}
    >
      <p>
        Hi, <br /> <span className="font-bold">{myuser?.username}</span>
      </p>
      <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
        <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
          <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
        </svg>
      </div>
      <div
        className={`${
          openHi
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[544px]  bg-[#2E2E2E] top-[64px] left-0 text-white duration-300  flex flex-col justify-between items-start`}
      >
        <div className="h-[56px] bg-[#454545] w-full flex justify-start items-center pl-6">
          <p className="text-[12px]">
            Trial <span className="font-bold">Start</span>
          </p>
        </div>
        <div className="bg-[#333] py-5 flex w-full justify-center ">
          <div className="pl-5 w-[224px] border-r-2 border-white">
            <h1 className="text-[#1dcd27] font-bold mb-4">Available</h1>
            <ul className="list-disc text-[10px] px-5">
              <li>1 loyalty card designs</li>
              <li>Unlimited number of issued cards by promotion</li>
              <li>1 locations</li>
              <li>Unlimited push messages</li>
              <li>Checking the customer base for duplicates</li>
              <li>Stamps and awards accrual</li>
            </ul>
          </div>
          <div className="pl-5 w-[224px]">
            <h1 className="text-[#ff0030] font-bold mb-4">Unavailable</h1>
            <ul className="list-disc text-[10px] px-5">
              <li>Configuring integrations</li>
              <li>Customizing custom fields</li>
              <li>Export data from the service</li>
              <li>Confirming a phone number when issuing a card</li>
              <li>Referral program</li>
              <li>Automatic push notifications</li>
              <li>Custom auto-push</li>
              <li>Creating managers</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-5 bg-[#454545] w-full">
          <h1 className="mb-4 text-[12px]">
            Your plan is <span className="font-bold">Start (Trial)</span>
          </h1>
          <p className="text-[12px]">
            If you have a need for more functionality, contact us to find out
            more about our other plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiDialog;
