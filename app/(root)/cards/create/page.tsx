"use client";
import React, { useState } from "react";
import CreateCardNav from "./CreateCardNav";
import CardTypes from "./CardTypes";
import CardButtons from "./CardButtons";

const page = () => {
  const [display, setDisplay] = useState("Description");
  return (
    <>
      <CreateCardNav />
      <CardButtons display={display} setDisplay={setDisplay} />
      <div
        className="pl-[100px] mt-10 w-full flex justify-between items-start 
      pt-[100px] mb-10 max-md:mb-20 max-md:flex-col max-md:items-center 
      max-md:px-5 max-md:pt-0"
      >
        <div className="w-[50%] max-md:w-full mr-6 max-md:mr-0">
          <h1 className="text-[30px] max-md:text-[25px]">Card type</h1>
          <hr className="border-[1px] border-gray mt-5" />
          <CardTypes display={display} />
        </div>
        <div
          className={`${
            display === "Card"
              ? " max-md:w-full border-l-[1px]  max-md:mt-10 rounded-md"
              : "max-md:hidden"
          } w-[50%] flex justify-center items-center border-gray h-screen max-h-screen bg-white`}
        >
          <div className="w-[274px] h-[557px] bg-[url('/assets/iphone.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

export default page;
