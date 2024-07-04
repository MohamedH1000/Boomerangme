"use client";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "../ui/input";

const Locations = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-2">
      <div className=" mt-10">
        <h1 className="text-[30px] font-medium">Locations</h1>
      </div>
      <p className=" w-4/5 mt-5">
        On your plan <span className="font-medium">available 1 locations</span>.
        In 330 feet radius from location users can see your geo-push message on
        the lock screen.
      </p>
      <hr className="border-[1px] border-[#D5D5DD] mt-10" />
      <Button
        className="bg-[black] text-white rounded-md w-full mt-10 "
        onClick={() => setOpen((prev: any) => !prev)}
      >
        {open ? "Hide location adding" : "Add location"}
      </Button>
      {open && (
        <div
          className="w-full bg-[#FFFFFF] rounded-md 
        border-[#D5D5DD] border-[1px] mt-10"
        >
          <div className="flex justify-between items-center p-2 border-[#D5D5DD] border-b-[1px]">
            <h1 className="text-[25px] font-medium max-md:text-[20px]">
              Add location
            </h1>
            <Switch
              className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-[#e4e0e0] 
            border-[#D5D5DD] border-[1px]"
            />
          </div>
          <div className="flex flex-col items-start justify-center p-4 gap-3">
            <Input placeholder="Location name" className="p-3 w-full" />
            <Input placeholder="Location address" className="p-3 w-full" />
            <div></div>
            <div className="w-full">
              <label htmlFor="">Apply to cards</label>
              <div className="w-full border-[#D5D5DD] border-[1px] rounded-md p-4">
                Nothing Selected
              </div>
              <label htmlFor="">Push message</label>
              <textarea className="w-full border-[#D5D5DD] border-[1px] rounded-md p-4" />
            </div>
            <Button className="bg-[black] text-white flex justify-center items-center p-4 w-1/5 max-sm:w-full">
              Add
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Locations;
