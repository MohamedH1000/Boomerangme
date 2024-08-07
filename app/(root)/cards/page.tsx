"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./cards.css";
import Link from "next/link";

const page = () => {
  const myCards = [
    {
      id: 1,
      name: "bar",
      type: "stamp",
      active: true,
    },
    { id: 2, name: "sar", type: "reward", active: false },
  ];
  return (
    <div
      className="p-20 flex justify-start items-start 
    flex-wrap max-md:p-10 max-sm:p-3 
    max-sm:pt-20 mb-20 gap-y-24 max-md:justify-center"
    >
      <div className="w-[355px] mt-10">
        <div className="flex flex-col items-center justify-start ">
          <div className="w-[80px] h-24px rounded-full flex items-center bg-[#eaeaed] p-1 justify-center">
            <div className="bg-[#1dcd27] rounded-full h-2 mr-3 w-2 " />
            <p className="text-[12px]">Active</p>
          </div>
          <div className="w-[275px] h-[558px] bg-[#eaeaed] rounded-3xl flex justify-center items-center border-[1px] border-[gray] mt-5 cursor-pointer">
            +
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-10">
            <p className="text-[18px] font-bold">Create Card</p>
            <Link href={"/cards/templates"}>
              <Button
                className="bg-[black] text-white
              w-[246px] h-[40px]
              hover:opacity-80 duration-300"
              >
                Template
              </Button>
            </Link>
            <Link href={"/cards/create"}>
              <Button
                className="bg-white border-[1px]
                border-[gray] text-black w-[246px] h-[40px]
              hover:bg-[black] hover:text-white duration-300
              hover:border-none"
              >
                From Scratch
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {myCards.map((card, i) => (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[400px] h-[720px] mt-1" key={i}>
              <div className="flex flex-col items-center justify-start bg-[url('/assets/iphone.png')] bg-cover bg-center bg-no-repeat w-full h-full">
                <div className="w-[80px] h-24px rounded-full flex items-center bg-[#eaeaed] p-1 justify-center mt-9">
                  {card?.active ? (
                    <div className="bg-[#1dcd27] rounded-full h-2 mr-3 w-2 " />
                  ) : (
                    <div className="bg-[red] rounded-full h-2 mr-3 w-2 " />
                  )}
                  <p className="text-[12px]">{card?.type}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 mt-[-40px]">
              <p className="text-[18px] font-bold">{card?.name}</p>
              <Button
                className="bg-[black] text-white
                  w-[246px] h-[40px]
                  hover:opacity-80 duration-300"
              >
                Open
              </Button>
              <div className="flex justify-center gap-3 items-center z-[-10px]">
                <div
                  className={`${
                    card.active
                      ? "pointer-events-none opacity-40"
                      : "pointer-events-auto "
                  } bg-[#ebebeb] text-white w-[40px] h-[40px]
                    flex justify-center items-center
                    rounded-md cursor-pointer hover:bg-[#1dcd27]
                    duration-300 parent`}
                >
                  <Image
                    src={"/icons/startButton.svg"}
                    alt="start button"
                    width={24}
                    height={24}
                    className="invert-0 child"
                  />
                </div>
                <div className="bg-[#ebebeb] text-white w-[40px] h-[40px] flex justify-center items-center rounded-md cursor-pointer hover:bg-[black] duration-300 parent">
                  <Image
                    src={"/icons/pdfdownload.svg"}
                    alt="start button"
                    width={24}
                    height={24}
                    className="invert-0 child"
                  />
                </div>
                <div className="bg-[#ebebeb] text-white w-[40px] h-[40px] flex justify-center items-center rounded-md cursor-pointer hover:bg-[black] duration-300 parent">
                  <Image
                    src={"/icons/copy.svg"}
                    alt="start button"
                    width={24}
                    height={24}
                    className="invert-0 child"
                  />
                </div>
                <div className="bg-[#ebebeb] text-white w-[40px] h-[40px] flex justify-center items-center rounded-md cursor-pointer hover:bg-[red] duration-300 parent">
                  <Image
                    src={"/icons/delete.svg"}
                    alt="start button"
                    width={24}
                    height={24}
                    className="invert-0 child"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default page;
