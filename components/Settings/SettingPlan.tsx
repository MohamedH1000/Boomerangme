import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SettingPlan = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className="min-h-screen flex flex-1 flex-col pl-20 
 mt-10 w-full bg-[#F7F7F8] pr-10 max-sm:pl-5 max-sm:pr-5"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl">Plan</h2>
        <div className="flex justify-center gap-2 items-center">
          <span
            className={`${
              pathname === "/settings"
                ? "bg-[#e9e9ec] w-[58px] h-[32px]"
                : "bg-[#ffffff] hover:bg-[#e9e9ec] w-[58px] h-[32px]"
            } duration-300
         flex justify-center items-center 
      rounded-sm cursor-pointer text-[14px]`}
            onClick={() => router.push("/settings")}
          >
            Plan
          </span>
          <span
            className={`${
              pathname === "/settings/payments-history"
                ? "bg-[#e9e9ec] w-[130px] h-[32px]"
                : "hover:bg-[#e9e9ec] bg-[#ffffff] w-[130px] h-[32px]"
            } duration-300
      flex justify-center items-center 
      rounded-sm cursor-pointer text-[14px]`}
            onClick={() => router.push("/settings/payments-history")}
          >
            Payments History
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingPlan;
