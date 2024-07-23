"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const CardButtons = ({ display, setDisplay }: any) => {
  return (
    <div className="flex justify-center items-center w-full max-md:static md:hidden mt-[150px] px-5">
      <Button
        className={`${
          display === "Description"
            ? "bg-[#2E2E2E] text-white"
            : "border-[#83838a] border-[1px]"
        } w-full  rounded-l-md rounded-r-none`}
        onClick={() => setDisplay("Description")}
      >
        Description
      </Button>
      <Button
        className={`${
          display === "Card"
            ? "bg-[#2E2E2E] text-white"
            : "border-[#83838a] border-[1px]"
        } w-full rounded-r-md rounded-l-none`}
        onClick={() => setDisplay("Card")}
      >
        Card
      </Button>
    </div>
  );
};

export default CardButtons;
