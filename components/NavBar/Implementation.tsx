"use client";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
  openImplement: Boolean;
  setOpenImplement: Dispatch<SetStateAction<boolean>>;
  setOpenHi: Dispatch<SetStateAction<boolean>>;
}
const Implementation = ({
  openImplement,
  setOpenImplement,
  setOpenHi,
}: Props) => {
  return (
    <div
      className={`${
        openImplement ? "bg-[#2E2E2E]" : "hover:bg-[#2E2E2E]"
      } p-2 flex justify-between text-white
     duration-500 cursor-pointer
    w-[180px] text-[14px] items-center relative p-3`}
      onClick={() => {
        setOpenImplement((prev: any) => !prev);
        setOpenHi(false);
      }}
    >
      <div>implementation</div>
      <div className="flex justify-center items-center h-[20px] w-[20px] bg-[#2E2E2E] rounded-full pl-[5px]">
        <svg viewBox="0 0 8 4" className="fill-white h-[5px] mr-[5px] ">
          <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
        </svg>
      </div>
      <div
        className={`${
          openImplement
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute w-[272px] top-[64px] bg-[#2E2E2E] left-0 text-white duration-300 flex flex-col justify-between items-start h-[121px] p-5`}
      >
        <div className="  w-full flex flex-col justify-center items-start">
          <p className="">Stage:</p>
          <p className="text-[red] font-bold">Start</p>
        </div>
        <div>
          <p>Recommendation:</p>
          <span className="font-bold">Activate your loyalty card</span>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
