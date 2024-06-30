"use client";
import SettingPlan from "@/components/Settings/SettingPlan";
import SettingsNav from "@/components/Settings/SettingsNav";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen flex flex-1 flex-col pl-20 
mt-10 w-full bg-[#F7F7F8] pr-10 max-sm:pl-5 max-sm:pr-5"
    >
      <SettingPlan />
    </div>
  );
};

export default page;
